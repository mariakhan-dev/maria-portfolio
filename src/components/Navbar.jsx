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
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-neutral-200/80 bg-[#f8f6f1]/90 px-5 shadow-lg shadow-neutral-950/[0.04] backdrop-blur-xl sm:px-7">
        <a
          href="#top"
          className="text-[1.65rem] font-black tracking-[-0.07em] text-neutral-950 transition hover:text-orange-600"
          aria-label="Maria Khan home"
        >
          maria<span className="text-orange-600">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-neutral-200/80 bg-white/70 p-1 md:flex">
          {links.map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="rounded-full px-4 py-2 text-sm font-bold text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex"
          >
            Let's talk <span aria-hidden="true">↗</span>
          </a>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
