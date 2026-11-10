import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../data/content'
import './Navbar.css'

export default function Navbar() {
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
      setScrolled(window.scrollY > window.innerHeight * 0.6)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <span className="navbar__progress" ref={progressRef} aria-hidden="true" />
      <ul className="navbar__list">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`navbar__link tracked${activeId === link.id ? ' navbar__link--active' : ''}`}
              onClick={(e) => handleClick(e, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
