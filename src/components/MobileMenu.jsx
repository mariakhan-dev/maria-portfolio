import { useState } from 'react'

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]

  return (
    <div className="mobile-menu">
      <button className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? '×' : '☰'}</button>
      {open && <div className="mobile-menu-panel">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" className="mobile-menu-cta" onClick={() => setOpen(false)}>Let's talk ↗</a>
      </div>}
    </div>
  )
}

export default MobileMenu
