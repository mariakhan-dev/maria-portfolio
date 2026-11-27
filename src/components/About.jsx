function About() {
  const highlights = [
    { icon: '✳', title: 'Frontend experiences', text: 'Clean, responsive interfaces designed around real users.' },
    { icon: '⌘', title: 'Full-stack systems', text: 'Connected frontend, backend, APIs and databases.' },
    { icon: '↗', title: 'Practical integrations', text: 'AI services, payments and tools that add real value.' },
  ]

  return (
    <section id="about" className="about-section section-pad">
      <div className="section-container">
        <div className="about-layout">
          <div className="about-visual">
            <div className="about-visual-top"><span>MY WORKFLOW</span><span>01 — 03</span></div>
            <div className="workflow-step"><span>01</span><div><strong>Understand the idea</strong><small>Listen, explore and define the problem.</small></div><i>✳</i></div>
            <div className="workflow-connector" />
            <div className="workflow-step"><span>02</span><div><strong>Design & develop</strong><small>Build the interface and the logic behind it.</small></div><i>⌘</i></div>
            <div className="workflow-connector" />
            <div className="workflow-step"><span>03</span><div><strong>Connect the pieces</strong><small>Bring data, APIs and experiences together.</small></div><i>↗</i></div>
            <div className="about-visual-note"><span>✿</span><p>Good work starts with<br /><em>asking better questions.</em></p></div>
            <div className="about-visual-orb" />
          </div>
          <div className="about-copy">
            <p className="section-kicker">A LITTLE ABOUT ME <span /></p>
            <h2>Curious mind.<br /><em>Builder's</em> mindset.</h2>
            <p>I'm Maria Khan, a full-stack developer who enjoys turning real-world needs into practical digital products. I like working through the whole problem — understanding the interface, shaping the data, connecting the backend and making all the pieces work together.</p>
            <p>My work spans Laravel, PHP, React and MySQL, with experience in AI and payment integrations. I care about clear communication, thoughtful details and building solutions that are useful beyond the first screen.</p>
            <div className="about-signoff"><span className="signoff-line" /><span>Always learning. Always building.</span></div>
          </div>
        </div>
        <div className="about-highlights">
          {highlights.map((item) => <article key={item.title} className="highlight-card"><span className="highlight-icon">{item.icon}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
      </div>
    </section>
  )
}

export default About
