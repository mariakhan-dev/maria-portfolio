import MobileMenu from './MobileMenu'

function Navbar() {
  const links = [
    ['About', '#about'],
    ['Expertise', '#skills'],
    ['Work', '#projects'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6" aria-label="Main navigation">
      <div className="nav-shell mx-auto flex h-[66px] max-w-7xl items-center justify-between rounded-2xl border px-5 sm:px-7">
        <a href="#top" className="text-[1.55rem] font-bold tracking-[-0.07em] text-white transition hover:text-cyan-300" aria-label="Maria Khan home">
          maria<span className="text-cyan-300">.</span>
        </a>
        <div className="hidden items-center gap-1 rounded-xl border border-white/[0.07] bg-white/[0.035] p-1 md:flex">
          {links.map(([label, link]) => (
            <a key={label} href={link} className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 sm:inline-flex">Let's talk <span aria-hidden="true">↗</span></a>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
