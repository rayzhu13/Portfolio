import { FaBasketballBall, FaDiscord, FaUtensils } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { content } from '../data/content'

const projectIcons = {
  food: FaUtensils,
  basketball: FaBasketballBall,
  discord: FaDiscord,
}

function linkLabel(url) {
  try {
    const { hostname } = new URL(url)
    return hostname === 'github.com' ? 'View on GitHub' : hostname.replace(/^www\./, '')
  } catch {
    return 'View project'
  }
}

function trackPointer(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__heading tracked">Projects</h2>
        <div className="projects__grid">
          {content.projects.map((project, i) => {
            const Icon = projectIcons[project.icon]
            return (
              <div key={project.title} className="reveal" style={{ '--delay': `${i * 120}ms` }}>
                <a
                  href={project.link}
                  className="project-card"
                  target="_blank"
                  rel="noreferrer"
                  onMouseMove={trackPointer}
                >
                  <div className="project-card__visual" aria-hidden="true">
                    <span className="project-card__index">{String(i + 1).padStart(2, '0')}</span>
                    <FiArrowUpRight className="project-card__arrow" />
                    {Icon && <Icon className="project-card__icon" />}
                  </div>
                  <div className="project-card__body">
                    {project.kind && <p className="project-card__kind tracked">{project.kind}</p>}
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <span className="project-card__link">
                      {linkLabel(project.link)} <FiArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
