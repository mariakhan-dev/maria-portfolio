import MobileMenu from './MobileMenu'

function Navbar() {
  const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="brand-mark" aria-label="Maria Khan home">
          <span className="brand-monogram">M</span><span>Maria<span className="brand-dot">.</span></span>
        </a>
        <div className="desktop-links">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <a href="#contact" className="nav-cta">Let's talk <span>↗</span></a>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default Navbar
