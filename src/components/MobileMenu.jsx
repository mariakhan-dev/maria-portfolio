import { useState } from 'react'
function MobileMenu() {
  const [open, setOpen] = useState(false)
  const links = [['About','#about'],['Skills','#skills'],['Projects','#projects'],['Contact','#contact']]
  return <div className="mobile-nav"><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? '×' : '☰'}</button>{open && <div className="mobile-panel">{links.map(([label,href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}</div>}</div>
}
export default MobileMenu