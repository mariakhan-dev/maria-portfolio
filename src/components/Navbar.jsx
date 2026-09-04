import MobileMenu from './MobileMenu'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f1]/90 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-tight">
          Maria<span className="text-orange-600">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm font-semibold hover:text-orange-600 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm font-semibold hover:text-orange-600 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm font-semibold hover:text-orange-600 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm font-semibold hover:text-orange-600 transition"
          >
            Contact
          </a>
        </div>

        <MobileMenu />

        {/* Resume */}
        <a
          href="#contact"
          className="hidden sm:inline-flex bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  )
}

export default Navbar