const tech = ['Laravel', 'React', 'JavaScript', 'PHP', 'MySQL', 'REST APIs']

function Hero() {
  return (
    <section id="top" className="hero-shell relative isolate overflow-hidden px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2.5 text-xs font-semibold tracking-wide text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
            Open to opportunities & selected projects
          </div>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
            Full-Stack Developer <span className="mx-2 text-slate-600">/</span> Product Builder
          </p>

          <h1 className="max-w-3xl text-[clamp(3.6rem,7.2vw,6.7rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-white">
            I build digital
            <span className="block text-gradient">products that work.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I'm <strong className="font-semibold text-white">Maria Khan</strong>, a full-stack developer focused on building useful web applications — from polished interfaces to the backend systems and integrations behind them.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary inline-flex items-center gap-3 rounded-xl px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1">
              Explore selected work <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="button-secondary inline-flex items-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1">
              Let's discuss a project <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Technologies I work with</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-300">{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-[650px] lg:ml-auto">
          <div className="editor-window overflow-hidden rounded-2xl border border-white/10 shadow-[0_35px_100px_-35px_rgba(0,0,0,.9)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#111a2a] px-5 py-4">
              <div className="flex items-center gap-2" aria-label="Window controls">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              </div>
              <span className="font-mono text-[11px] text-slate-500">maria / portfolio</span>
              <span className="text-xs text-cyan-300">● Live preview</span>
            </div>

            <div className="grid min-h-[390px] grid-cols-[54px_1fr] bg-[#080e19] sm:min-h-[450px] sm:grid-cols-[66px_1fr]">
              <div className="border-r border-white/[0.06] py-6 text-center font-mono text-xs leading-[2.35rem] text-slate-700">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09<br/>10</div>
              <div className="overflow-hidden p-5 font-mono text-[11px] leading-[2.35rem] sm:p-7 sm:text-[13px]">
                <p className="text-slate-500">// Turning ideas into working products</p>
                <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
                <p className="pl-5 text-slate-300">name: <span className="code-green">'Maria Khan'</span>,</p>
                <p className="pl-5 text-slate-300">focus: <span className="code-green">'full-stack development'</span>,</p>
                <p className="pl-5 text-slate-300">frontend: [<span className="code-green">'React'</span>, <span className="code-green">'JavaScript'</span>],</p>
                <p className="pl-5 text-slate-300">backend: [<span className="code-green">'Laravel'</span>, <span className="code-green">'PHP'</span>],</p>
                <p className="pl-5 text-slate-300">database: <span className="code-green">'MySQL'</span>,</p>
                <p className="pl-5 text-slate-300">mindset: <span className="code-green">'build with purpose'</span></p>
                <p>{'}'}</p>
                <div className="my-5 h-px bg-white/[0.08]" />
                <p className="text-slate-500">// A few things I've built</p>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4">
                    <span className="text-[10px] uppercase tracking-widest text-cyan-300">01 / Commerce</span>
                    <p className="mt-2 font-sans text-base font-semibold text-white">NovaCart AI</p>
                    <p className="font-sans text-xs leading-5 text-slate-400">E-commerce · AI · Payments</p>
                  </div>
                  <div className="rounded-xl border border-violet-300/20 bg-violet-300/[0.06] p-4">
                    <span className="text-[10px] uppercase tracking-widest text-violet-300">02 / Education</span>
                    <p className="mt-2 font-sans text-base font-semibold text-white">Smart Attendance</p>
                    <p className="font-sans text-xs leading-5 text-slate-400">Web · Android · QR · GPS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-note absolute -bottom-7 -left-4 rounded-xl border border-white/10 bg-[#121d2e] px-5 py-4 shadow-2xl sm:-left-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Development approach</p>
            <p className="mt-1 text-sm font-semibold text-white">Thoughtful UI. Solid logic.</p>
          </div>
          <a href="https://github.com/mariakhan-dev" target="_blank" rel="noreferrer" className="absolute -right-2 -top-5 rounded-xl border border-white/10 bg-[#172337] px-4 py-3 text-xs font-semibold text-slate-200 shadow-xl transition hover:border-cyan-300/40 hover:text-cyan-200 sm:-right-5">
            GitHub profile <span className="ml-2 text-cyan-300">↗</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-white/10 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
        <span>Design / Develop / Deliver</span><span>Abbottabad, Pakistan · Working worldwide</span>
      </div>
    </section>
  )
}

export default Hero
