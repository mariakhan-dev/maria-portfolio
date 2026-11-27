const tech = ['Laravel', 'React', 'JavaScript', 'PHP', 'MySQL', 'AI Integrations']

function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-12 sm:pt-16 lg:px-10 lg:pb-28">
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-orange-200/40 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-100/70 blur-[100px]" />

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm shadow-orange-950/[0.03]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-neutral-700 sm:text-xs">
              Available for select projects
            </span>
          </div>

          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-orange-600 sm:text-sm">
            Full-Stack Web Developer
          </p>

          <h1 className="max-w-4xl text-[clamp(3.2rem,7vw,6.4rem)] font-black leading-[0.94] tracking-[-0.075em] text-neutral-950">
            I turn ideas into
            <span className="block text-orange-600">digital products.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
            I'm <strong className="font-bold text-neutral-950">Maria Khan</strong> — a developer building thoughtful web applications, useful business tools and connected digital experiences. I work across the frontend, backend, databases and integrations to bring a product together.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-neutral-950/10 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-7 py-4 text-sm font-bold text-neutral-900 transition duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-600"
            >
              Start a conversation
            </a>
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-7">
            <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">
              Tools I use to build
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-200 bg-white/75 px-3.5 py-2 text-xs font-bold text-neutral-700 shadow-sm shadow-neutral-950/[0.02] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
          <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-orange-200/70 sm:-inset-5" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-neutral-200 shadow-[0_35px_90px_-35px_rgba(40,25,10,0.35)]">
            <img
              src="/images/maria-developer.png"
              alt="Maria Khan, full-stack web developer"
              fetchPriority="high"
              className="h-[420px] w-full object-cover object-center sm:h-[540px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/25 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Design-minded. Engineering-focused.</p>
              <p className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Built with purpose.</p>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl shadow-neutral-950/10 sm:-left-8 sm:p-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-neutral-400">My approach</p>
            <p className="mt-1 text-sm font-extrabold text-neutral-900 sm:text-base">From interface to database</p>
            <p className="mt-1 text-xs text-neutral-500">One connected product experience</p>
          </div>

          <a
            href="https://github.com/mariakhan-dev"
            target="_blank"
            rel="noreferrer"
            className="absolute -right-2 top-7 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-3 text-xs font-extrabold text-neutral-800 shadow-lg transition hover:-translate-y-1 hover:text-orange-600 sm:-right-5 sm:top-10"
            aria-label="Visit Maria Khan on GitHub"
          >
            <span aria-hidden="true">⌘</span> GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
