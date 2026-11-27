function Hero() {
  const stack = ['Laravel', 'React', 'JavaScript', 'PHP', 'MySQL']

  return (
    <section id="top" className="hero-section">
      <div className="hero-decor hero-decor-left" aria-hidden="true" />
      <div className="hero-decor hero-decor-right" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span /> FULL-STACK DEVELOPER <i /> PRODUCT BUILDER</p>
          <h1>Hi, I'm Maria.<br /><em>I build</em> digital<br />experiences<span className="hero-period">.</span></h1>
          <p className="hero-description">I design and develop thoughtful web applications, useful business tools and connected digital experiences — bringing ideas to life from the first interface to the backend logic.</p>
          <div className="hero-actions">
            <a href="#projects" className="button-berry">Explore my work <span>↗</span></a>
            <a href="#contact" className="button-outline">Let's connect <span>↗</span></a>
          </div>
          <div className="hero-stack">
            <span className="mini-label">MY TOOLKIT</span>
            <div>{stack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="portrait-frame">
            <img src="/images/maria-developer.png" alt="Maria working on a web development project" />
          </div>
          <div className="portrait-caption"><span className="caption-star">✳</span><div><strong>Thoughtful by design.</strong><small>Built with purpose.</small></div></div>
          <div className="floating-tag tag-top"><span>✦</span> Creative problem solver</div>
          <div className="floating-tag tag-bottom"><span className="availability-dot" /> Open to opportunities</div>
          <div className="signature-mark">Maria Khan<span>Full-Stack Developer</span></div>
        </div>
      </div>
      <div className="hero-bottomline"><span>DESIGNING WITH INTENTION</span><span>DEVELOPING WITH PURPOSE</span><span>PAKISTAN · WORKING WORLDWIDE</span></div>
    </section>
  )
}

export default Hero
