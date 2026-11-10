import { content } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__heading tracked">Experience</h2>
        <div className="experience__list">
          {content.experience.map((job, i) => {
            const current = /present/i.test(job.dates)
            return (
              <div
                key={`${job.company}-${job.role}`}
                className={`experience__item reveal${current ? ' experience__item--current' : ''}`}
                style={{ '--delay': `${i * 120}ms` }}
              >
                <div className="experience__card">
                  <div className="experience__header">
                    <span className="experience__badge" aria-hidden="true">
                      {job.company.charAt(0)}
                    </span>
                    <div className="experience__titles">
                      <h3>{job.role}</h3>
                      <p className="experience__company">{job.company}</p>
                    </div>
                    <span className="experience__dates">
                      {current && <span className="experience__live">Current</span>}
                      {job.dates}
                    </span>
                  </div>
                  <ul className="experience__bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {job.tags && (
                    <ul className="tags">
                      {job.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
