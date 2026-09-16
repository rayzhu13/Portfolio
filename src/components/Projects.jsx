import { content } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__heading tracked">Projects</h2>
        <div className="projects__grid">
          {content.projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
