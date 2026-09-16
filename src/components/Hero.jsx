import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa'
import ParticleWaves from './ParticleWaves'
import { content } from '../data/content'
import './Hero.css'

export default function Hero() {
  const { social } = content
  const sectionRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setTilt({ x, y })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      id="home"
      className="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ParticleWaves tiltX={tilt.x} tiltY={tilt.y} />
      <div
        className="hero__content"
        style={{ transform: `translate3d(${tilt.x * 10}px, ${tilt.y * 8}px, 0)` }}
      >
        <h1 className="hero__name tracked">{content.name}</h1>
        <div className="hero__divider" />
        <p className="hero__title tracked">{content.title}</p>
        <div className="hero__socials">
          <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <span className="hero__sep" />
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <span className="hero__sep" />
          <a href={`mailto:${social.email}`} aria-label="Email">
            <FaRegEnvelope />
          </a>
          <span className="hero__sep" />
          <a href={social.resumeUrl} target="_blank" rel="noreferrer" aria-label="Resume">
            <FaRegFileAlt />
          </a>
        </div>
      </div>
    </section>
  )
}
