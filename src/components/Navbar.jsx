import MobileMenu from './MobileMenu'

function Navbar() {
  const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <a href="#top" className="brand-mark" aria-label="Maria Khan home"><span className="brand-monogram">M</span><span>Maria Khan<span className="brand-dot">.</span></span></a>
        <div className="desktop-links">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>
        <a href="#contact" className="nav-cta">Let’s talk <span>↗</span></a>
        <MobileMenu />
      </div>
    </nav>
  )
}
export default Navbar