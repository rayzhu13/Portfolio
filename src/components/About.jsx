import { content } from '../data/content'

export default function About() {
  const { about } = content

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__heading tracked">{about.heading}</h2>
        <div className="about__content">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="about__skills">
            {about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
