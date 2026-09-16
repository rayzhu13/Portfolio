import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa'
import { content } from '../data/content'

export default function Contact() {
  const { social } = content

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section__heading tracked">Contact</h2>
        <p className="contact__lead">
          Feel free to reach out — I'm always open to discussing new projects, opportunities, or just saying hello.
        </p>
        <a className="contact__email" href={`mailto:${social.email}`}>
          {social.email}
        </a>
        <div className="contact__socials">
          <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <span className="contact__sep" />
          <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <span className="contact__sep" />
          <a href={social.resumeUrl} target="_blank" rel="noreferrer" aria-label="Resume">
            <FaRegFileAlt />
          </a>
        </div>
      </div>
      <p className="footer">© {new Date().getFullYear()} {content.name}</p>
    </section>
  )
}
