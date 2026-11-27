function Hero() {
  const tech = ['Laravel', 'React', 'PHP', 'MySQL', 'JavaScript', 'REST APIs']
  return (
    <section id="top" className="hero-section">
      <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> FULL-STACK DEVELOPER <span className="eyebrow-line" /></div>
          <div className="availability"><span /> Available for selected projects</div>
          <h1>I build digital<br /><em>experiences</em><br />that make an impact<span className="hero-period">.</span></h1>
          <p className="hero-intro">I'm Maria Khan — a full-stack developer turning ideas into thoughtful, functional web products. From polished interfaces to the systems behind them, I build with purpose.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <span>↗</span></a><a className="button-secondary" href="#contact">Let’s create something <span>↗</span></a></div>
          <div className="hero-tech"><span>MY TOOLKIT</span><div>{tech.map(t => <b key={t}>{t}</b>)}</div></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame"><div className="hero-image-wash" /><img src="/images/maria-developer.png" alt="Portrait used in Maria Khan's developer portfolio" /></div>
          <div className="hero-note note-top"><span className="note-icon">✳</span><span>Thoughtful design<br /><strong>Reliable development</strong></span></div>
          <div className="hero-note note-bottom"><span className="code-symbol">&lt;/&gt;</span><span><strong>From idea to launch</strong><br />Full-stack development</span></div>
          <div className="hero-stamp">DESIGN<br />×<br />DEVELOP</div>
          <span className="hero-spark spark-one">✳</span><span className="hero-spark spark-two">✦</span>
        </div>
      </div>
      <div className="hero-bottomline"><span>INDEPENDENT DEVELOPER</span><span>BASED IN PAKISTAN · WORKING WORLDWIDE</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  )
}
export default Hero