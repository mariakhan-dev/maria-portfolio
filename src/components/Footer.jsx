function Footer() {
  return (
    <footer className="bg-neutral-950 text-white px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Main footer */}
        <div className="py-10 flex flex-col md:flex-row md:items-center justify-between gap-8">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl font-black tracking-[-0.04em]"
            >
              Maria<span className="text-orange-500">.</span>
            </a>

            <p className="text-gray-500 text-sm mt-2">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-400">
            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-orange-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-orange-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#"
            className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition"
            aria-label="Back to top"
          >
            ↑
          </a>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-600">

          <p>
            © {new Date().getFullYear()} Maria Khan. All rights reserved.
          </p>

          <p>
            Designed & built with React
            <span className="text-orange-500"> • </span>
            Building for the web.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer