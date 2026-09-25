import { useEffect, useRef } from 'react'

// A lightweight canvas starfield rendered once behind the whole page.
// - Stars sit in three depth layers and drift slowly for parallax.
// - Each star twinkles via a sine phase.
// - Rare shooting stars streak across for extra atmosphere.
// Honours prefers-reduced-motion by rendering a still field.
export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let stars = []
    let shooters = []
    let raf = 0
    let t = 0
    let nextShoot = 90 // frames until the next shooting star

    const LAYERS = [
      { count: 0.00012, speed: 0.012, size: [0.4, 0.9], alpha: [0.25, 0.6] },
      { count: 0.00009, speed: 0.025, size: [0.7, 1.4], alpha: [0.4, 0.85] },
      { count: 0.00004, speed: 0.05, size: [1.1, 2.0], alpha: [0.6, 1.0] },
    ]

    const rand = (a, b) => a + Math.random() * (b - a)

    // Match the backing store to the element. This clears the canvas, so the
    // caller is responsible for painting a frame afterwards.
    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      const area = width * height
      // A phone viewport is roughly a quarter of a laptop's area, so a flat
      // per-pixel density leaves the sky looking empty on mobile. Lift the
      // count on narrow screens so it reads as full there too.
      const boost = width < 700 ? 1.9 : width < 1100 ? 1.35 : 1
      stars = []
      LAYERS.forEach((layer) => {
        const n = Math.floor(area * layer.count * boost)
        for (let i = 0; i < n; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: rand(layer.size[0], layer.size[1]),
            baseA: rand(layer.alpha[0], layer.alpha[1]),
            speed: layer.speed,
            phase: Math.random() * Math.PI * 2,
            tw: rand(0.6, 1.6),
            // faint colour variation: most white, some blue/violet
            hue: Math.random() < 0.18 ? rand(255, 280) : rand(205, 230),
            sat: Math.random() < 0.3 ? rand(20, 60) : 0,
          })
        }
      })
    }

    function spawnShooter() {
      const fromLeft = Math.random() < 0.5
      shooters.push({
        x: fromLeft ? -50 : width + 50,
        // span the full height so meteors streak across the whole interface
        y: rand(0, height * 0.95),
        vx: (fromLeft ? 1 : -1) * rand(5.5, 8.5),
        vy: rand(1.4, 3.2),
        life: 0,
        max: rand(45, 75),
        len: rand(90, 180),
      })
    }

    function draw() {
      t += 1
      ctx.clearRect(0, 0, width, height)

      for (const s of stars) {
        // slow upward drift, wrapping around
        s.y -= s.speed
        if (s.y < -2) {
          s.y = height + 2
          s.x = Math.random() * width
        }
        const twinkle = reduce ? 1 : 0.55 + 0.45 * Math.sin(t * 0.02 * s.tw + s.phase)
        const a = Math.min(1, s.baseA * twinkle)
        ctx.beginPath()
        ctx.fillStyle = `hsla(${s.hue}, ${s.sat}%, 92%, ${a})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // shooting stars
      if (!reduce) {
        for (let i = shooters.length - 1; i >= 0; i--) {
          const sh = shooters[i]
          sh.x += sh.vx
          sh.y += sh.vy
          sh.life += 1
          // `max` is fractional, and a shooter is only removed at the end of
          // this loop, so its last frame can land just past 1. Clamping keeps
          // Math.pow off a negative base, which would give NaN and throw in
          // addColorStop below — taking the whole animation loop with it.
          const p = Math.min(1, sh.life / sh.max)
          // ramp in quickly, then ease all the way out to 0 so it fully vanishes
          const fade = p < 0.15 ? p / 0.15 : Math.pow(1 - (p - 0.15) / 0.85, 1.6)
          const tailX = sh.x - sh.vx * (sh.len / 8)
          const tailY = sh.y - sh.vy * (sh.len / 8)
          const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY)
          grad.addColorStop(0, `rgba(200, 220, 255, ${0.9 * fade})`)
          grad.addColorStop(1, 'rgba(200, 220, 255, 0)')
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.6
          ctx.beginPath()
          ctx.moveTo(sh.x, sh.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()
          if (sh.life > sh.max) shooters.splice(i, 1)
        }
        // frequent meteors all over the interface — one roughly every ~1.5s,
        // often in pairs, with several allowed on screen at once
        nextShoot -= 1
        if (nextShoot <= 0 && shooters.length < 6) {
          spawnShooter()
          if (Math.random() < 0.6) spawnShooter()
          nextShoot = 70 + Math.random() * 50 // ~1.2–2s at 60fps
        }
      }
    }

    // Schedule the next frame before painting, so a single bad frame can never
    // break the chain and leave the sky frozen (or blank after a resize).
    function frame() {
      raf = requestAnimationFrame(frame)
      draw()
    }

    resizeCanvas()
    seed()
    if (reduce) draw() // a single static frame
    else frame()

    let resizeTimer
    let lastW = width
    let lastH = height
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        if (w === lastW && h === lastH) return
        // Mobile browsers fire resize whenever the URL bar slides in or out,
        // which only nudges the height. Re-seeding on that would re-randomise
        // the whole sky mid-scroll, so only the canvas is resized there.
        const reseed = w !== lastW || Math.abs(h - lastH) > 140
        lastW = w
        lastH = h
        resizeCanvas()
        if (reseed) seed()
        // resizeCanvas() clears the canvas; the running loop repaints on its
        // own, but the reduced-motion path has no loop to do it.
        if (reduce) draw()
      }, 200)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
}
