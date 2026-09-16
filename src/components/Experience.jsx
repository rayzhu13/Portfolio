import { content } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__heading tracked">Experience</h2>
        <div className="experience__list">
          {content.experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className="experience__item">
              <h3>{job.role} · {job.company}</h3>
              <p className="experience__meta">{job.dates}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
