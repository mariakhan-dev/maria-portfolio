function Skills() {
  const groups = [
    { icon: '✳', title: 'Frontend development', text: 'Responsive interfaces, thoughtful interactions and accessible user experiences.', tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { icon: '⌘', title: 'Backend & databases', text: 'Application logic, secure workflows, APIs and data-driven systems.', tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Authentication'] },
    { icon: '✧', title: 'AI & integrations', text: 'Connecting applications with intelligent services and third-party platforms.', tags: ['AI APIs', 'Groq AI', 'Stripe', 'Cloudinary'] },
    { icon: '▣', title: 'Mobile & connected apps', text: 'Experience connecting web platforms with native Android applications.', tags: ['Kotlin', 'Android', 'QR', 'GPS'] },
  ]

  return (
    <section id="skills" className="skills-section section-pad">
      <div className="section-container">
        <div className="section-heading-row">
          <div><p className="section-kicker">SKILLS & SERVICES <span /></p><h2>What I bring<br /><em>to the table.</em></h2></div>
          <p className="section-intro">A versatile toolkit for building complete digital experiences — with care at every layer.</p>
        </div>
        <div className="skill-grid">
          {groups.map((group, index) => <article className={`skill-card skill-card-${index + 1}`} key={group.title}>
            <span className="skill-icon">{group.icon}</span>
            <h3>{group.title}</h3><p>{group.text}</p>
            <div className="skill-tags">{group.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
      </div>
    </section>
  )
}

export default Skills
