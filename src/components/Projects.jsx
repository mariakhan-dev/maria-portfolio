function Projects() {
  const projects = [
    {
      number: '01', category: 'AI E-COMMERCE', title: 'NovaCart AI',
      description: 'A full-stack shopping platform with a customer storefront, admin workspace, AI shopping assistant and integrated checkout.',
      image: '/projects/novacart/showcase/novacart-main.png',
      imageAlt: 'NovaCart AI e-commerce platform showcase',
      stack: ['Laravel', 'PHP', 'PostgreSQL', 'Stripe', 'Groq AI'],
      link: 'https://novacart-ai.alwaysdata.net/', linkLabel: 'Live website',
      github: 'https://github.com/mariakhan-dev/novacart-ai', tone: 'rose'
    },
    {
      number: '02', category: 'CONNECTED ATTENDANCE SYSTEM', title: 'Smart Attendance',
      description: 'A connected attendance ecosystem linking web portals with a native Android app for QR-based attendance and GPS validation.',
      image: '/projects/attendance/showcase/attendance-main.png',
      imageAlt: 'Smart Attendance System showcase',
      stack: ['PHP', 'MySQL', 'Kotlin', 'Android', 'QR · GPS'],
      link: 'https://smart-attendance.lovestoblog.com/', linkLabel: 'Live website',
      demo: 'https://drive.google.com/file/d/1rZ4lSEaxiRHvSFmVdjo_xEitpVOwvspP/view?usp=drive_link', tone: 'lilac'
    },
    {
      number: '03', category: 'FINAL YEAR PROJECT · IN DEVELOPMENT', title: 'Citizen Portal',
      description: 'A citizen-focused platform with complaint management, an administration portal and a planned mobile experience.',
      stack: ['React', 'Laravel', 'MySQL', 'Flutter'],
      status: 'In development', tone: 'peach'
    },
  ]

  return (
    <section id="projects" className="projects-section section-pad">
      <div className="section-container">
        <div className="section-heading-row">
          <div><p className="section-kicker">SELECTED PROJECTS <span /></p><h2>Ideas turned into<br /><em>working products.</em></h2></div>
          <p className="section-intro">A selection of systems I've worked on — from e-commerce and AI integrations to connected platforms.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}>
            <div className="project-image-wrap">
              {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : <div className="citizen-preview" aria-label="Citizen Portal interface concept"><div className="citizen-top"><span>citizen<span>.</span></span><i>☰</i></div><div className="citizen-body"><small>YOUR DIGITAL COMMUNITY</small><strong>How can we<br />help today?</strong><div className="citizen-actions"><span>Submit a complaint</span><span>Track a request</span></div><div className="citizen-bars"><i/><i/><i/></div></div></div>}
              <span className="project-number">{project.number}</span>
            </div>
            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                {project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Watch demo ↗</a>}
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                {project.status && <span className="project-status"><i />{project.status}</span>}
              </div>
            </div>
          </article>)}
        </div>
        <div className="projects-footnote"><span>✳</span> Each project is a chance to solve a real problem with thoughtful technology.</div>
      </div>
    </section>
  )
}

export default Projects
