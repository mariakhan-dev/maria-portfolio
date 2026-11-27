function Skills() {
  const groups = [
    { n:'01', title:'Frontend', text:'Interfaces that feel clear, responsive and intuitive.', tags:['React','JavaScript','HTML','CSS','Tailwind CSS'] },
    { n:'02', title:'Backend & data', text:'Application logic, APIs, authentication and structured data.', tags:['PHP','Laravel','MySQL','REST APIs','Database Design'] },
    { n:'03', title:'AI & integrations', text:'Connecting products with useful external services.', tags:['Groq AI','AI APIs','Stripe','Cloudinary','Third-party APIs'] },
    { n:'04', title:'Mobile & connected systems', text:'Experience building alongside native Android applications.', tags:['Kotlin','Android','GPS','QR Integration','Firebase'] },
  ]
  return (
    <section id="skills" className="skills-section section-shell">
      <div className="section-kicker"><span>02 / WHAT I BRING</span><i /></div>
      <div className="skills-heading"><div><p className="section-label">SKILLS & CAPABILITIES</p><h2>A versatile stack.<br /><em>One clear purpose.</em></h2></div><p>I bring the pieces together to build complete digital products — from the first interface to the data and workflows powering it.</p></div>
      <div className="skill-grid">{groups.map(g => <article className="skill-card" key={g.n}><div className="skill-card-top"><span>{g.n}</span><span className="skill-star">✳</span></div><h3>{g.title}</h3><p>{g.text}</p><div className="skill-tags">{g.tags.map(t => <span key={t}>{t}</span>)}</div></article>)}</div>
      <div className="skills-footnote"><span>✳</span> Always learning. Always building.</div>
    </section>
  )
}
export default Skills