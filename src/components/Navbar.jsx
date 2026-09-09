import MobileMenu from './MobileMenu'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
      <div className="max-w-7xl mx-auto h-[68px] px-5 lg:px-7 flex items-center justify-between bg-[#f8f6f1]/90 backdrop-blur-xl border border-black/10 rounded-2xl shadow-sm">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-black tracking-[-0.04em] hover:text-orange-600 transition"
        >
          Maria<span className="text-orange-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/70 border border-black/5 rounded-full p-1">

          {[
            ['About', '#about'],
            ['Skills', '#skills'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="px-4 py-2 rounded-full text-sm font-bold text-gray-600 hover:text-black hover:bg-white transition"
            >
              {label}
            </a>
          ))}

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-neutral-950 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 hover:-translate-y-0.5 transition duration-300"
          >
            Let's Talk
            <span>↗</span>
          </a>

          <MobileMenu />

        </div>

      </div>
    </nav>
  )
}

export default Navbar