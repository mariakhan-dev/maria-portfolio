import { useState } from 'react'

function MobileMenu() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Expertise', '#skills'], ['Work', '#projects'], ['Contact', '#contact']]

  return (
    <div className="relative md:hidden">
      <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-lg text-white transition hover:border-cyan-300/40 hover:text-cyan-200" aria-label="Toggle menu" aria-expanded={open}>
        {open ? '✕' : '☰'}
      </button>
      {open && (
        <div className="absolute right-0 top-14 w-56 rounded-2xl border border-white/10 bg-[#101a2a] p-3 shadow-2xl">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[.06] hover:text-cyan-200">{label}</a>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileMenu
