import { useEffect, useRef } from 'react'

const RIBBONS = [
  { baseY: 0.18, slope: 0.05, amplitude: 0.14, freq: 0.8, phase: 0.4, speed: 0.05, thickness: 0.026, count: 380 },
  { baseY: 0.34, slope: -0.08, amplitude: 0.16, freq: 0.6, phase: 2.4, speed: -0.045, thickness: 0.03, count: 420 },
  { baseY: 0.5, slope: 0.1, amplitude: 0.15, freq: 0.7, phase: 4.2, speed: 0.055, thickness: 0.032, count: 450 },
  { baseY: 0.67, slope: -0.06, amplitude: 0.17, freq: 0.55, phase: 1.1, speed: -0.04, thickness: 0.032, count: 420 },
  { baseY: 0.82, slope: 0.07, amplitude: 0.12, freq: 0.75, phase: 5.6, speed: 0.045, thickness: 0.026, count: 360 },
]

const STAR_COUNT = 30

function edgeFade(xFrac) {
  const fadeWidth = 0.12
  const left = Math.min(1, xFrac / fadeWidth)
  const right = Math.min(1, (1 - xFrac) / fadeWidth)
  return Math.max(0, Math.min(left, right))
}

function buildRibbonParticles(config, width, height) {
  const particles = []
  for (let i = 0; i < config.count; i++) {
    const xFrac = i / config.count
    const r1 = Math.random()
    const r2 = Math.random()
    const triangular = (r1 + r2 - 1)
    particles.push({
      xFrac,
      perpOffset: triangular * config.thickness * height,
      size: 0.5 + Math.random() * 1.2,
      opacityJitter: 0.5 + Math.random() * 0.5,
    })
  }
  return particles
}

function buildStars(width, height) {
  const stars = []
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.3 + Math.random() * 0.6,
      vx: (Math.random() - 0.5) * 3,
    })
  }
  return stars
}

export default function ParticleWaves({ tiltX = 0, tiltY = 0 }) {
  const canvasRef = useRef(null)
  const targetTiltRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    targetTiltRef.current = { x: tiltX, y: tiltY }
  }, [tiltX, tiltY])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let ribbonParticles = []
    let stars = []
    let rafId
    const mouse = { x: 0, y: 0 }

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      ribbonParticles = RIBBONS.map((config) => ({
        config,
        particles: buildRibbonParticles(config, width, height),
      }))
      stars = buildStars(width, height)
    }

    function centerY(config, xFrac, t) {
      const wave = Math.sin(xFrac * Math.PI * 2 * config.freq + config.phase + t * config.speed)
      return (
        config.baseY * height +
        config.slope * xFrac * height +
        wave * config.amplitude * height
      )
    }

    let t = 0

    function draw() {
      ctx.clearRect(0, 0, width, height)

      const target = targetTiltRef.current
      mouse.x += (target.x - mouse.x) * 0.06
      mouse.y += (target.y - mouse.y) * 0.06

      ctx.save()
      ctx.translate(mouse.x * 10, mouse.y * 8)
      ribbonParticles.forEach(({ config, particles }) => {
        particles.forEach((p) => {
          const cy = centerY(config, p.xFrac, t)
          const y = cy + p.perpOffset
          if (y < -10 || y > height + 10) return
          const x = p.xFrac * width
          const fade = edgeFade(p.xFrac)
          const distFromCenter = Math.abs(p.perpOffset) / (config.thickness * height)
          const opacity = 0.5 * fade * p.opacityJitter * (1 - distFromCenter * 0.7)
          if (opacity <= 0.01) return
          ctx.beginPath()
          ctx.arc(x, y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity.toFixed(3)})`
          ctx.fill()
        })
      })
      ctx.restore()

      ctx.save()
      ctx.translate(mouse.x * 22, mouse.y * 18)
      stars.forEach((s) => {
        s.x += s.vx * 0.016
        if (s.x < -5) s.x = width + 5
        if (s.x > width + 5) s.x = -5
        const pulse = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * s.pulseSpeed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${(pulse * 0.55).toFixed(3)})`
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'
        ctx.shadowBlur = s.size * 4
        ctx.fill()
        ctx.shadowBlur = 0
      })
      ctx.restore()

      t += 0.016
      rafId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-waves" />
}
