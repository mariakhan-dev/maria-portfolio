function Footer() {
  return (
    <footer className="bg-black text-white px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-tight"
          >
            Maria<span className="text-orange-500">.</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">

            <a
              href="#about"
              className="hover:text-orange-500 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-orange-500 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </a>

          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Maria Khan
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer