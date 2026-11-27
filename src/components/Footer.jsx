function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#top" className="brand-mark"><span className="brand-monogram">M</span><span>Maria<span className="brand-dot">.</span></span></a>
        <p>Thoughtfully built, with a little curiosity in every line.</p>
        <div className="footer-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a><a href="https://github.com/mariakhan-dev" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <small>© {new Date().getFullYear()} Maria Khan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
