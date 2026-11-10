import { FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import { content } from '../data/content'

const skillIcons = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Node.js': SiNodedotjs,
  Python: SiPython,
  SQL: FaDatabase,
}

export default function About() {
  const { about } = content

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__heading tracked">{about.heading}</h2>
        <div className="about__content reveal">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <ul className="about__skills">
            {about.skills.map((skill) => {
              const Icon = skillIcons[skill]
              return (
                <li key={skill}>
                  {Icon && <Icon aria-hidden="true" />}
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
