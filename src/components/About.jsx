function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="section-kicker"><span>01 / A LITTLE INTRODUCTION</span><i /></div>
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-photo"><img src="/images/maria-developer.png" alt="Maria Khan" /></div>
          <div className="about-caption"><span>THE PERSON BEHIND THE CODE</span><b>Curious mind. Practical builder.</b></div>
          <div className="about-deco">M<span>✳</span></div>
        </div>
        <div className="about-copy">
          <p className="section-label">HELLO, I'M MARIA</p>
          <h2>Good ideas deserve<br /><em>great execution.</em></h2>
          <p className="about-lead">I’m a full-stack web developer who enjoys bringing useful ideas to life — combining clean interfaces with thoughtful backend engineering.</p>
          <p>I work across frontend, backend, databases and integrations. My projects include an AI-powered e-commerce platform and a connected attendance system with web portals and an Android app.</p>
          <p>I care about the details people notice and the foundations they don't: usability, maintainable code, reliable workflows and products that solve real problems.</p>
          <div className="about-tags"><span>Frontend & backend</span><span>Product thinking</span><span>Continuous learning</span></div>
          <a className="text-link" href="#contact">A project in mind? Let’s talk <span>↗</span></a>
        </div>
      </div>
    </section>
  )
}
export default About