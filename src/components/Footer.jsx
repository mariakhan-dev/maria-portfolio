function Footer() {
  return (
    <footer className="border-t border-white/[.08] bg-[#050912] px-6 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 py-10 md:flex-row md:items-center">
          <div>
            <a href="#top" className="text-2xl font-bold tracking-[-.05em]">maria<span className="text-cyan-300">.</span></a>
            <p className="mt-2 text-sm text-slate-500">Full-Stack Developer · Product Builder</p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Expertise</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
            <a href="https://github.com/mariakhan-dev" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub ↗</a>
          </div>
          <a href="#top" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-lg text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200" aria-label="Back to top">↑</a>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/[.08] py-5 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Maria Khan. All rights reserved.</p>
          <p>Designed & built with React <span className="text-cyan-300">·</span> Building for the web.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
