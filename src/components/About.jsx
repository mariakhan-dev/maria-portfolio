function About() {
  const strengths = [
    { number: '01', title: 'Frontend engineering', description: 'Responsive interfaces with thoughtful interactions, clear hierarchy and accessible foundations.' },
    { number: '02', title: 'Backend development', description: 'Application logic, database design, authentication and APIs that connect the whole product.' },
    { number: '03', title: 'Product integrations', description: 'AI services, payment workflows and third-party tools that make applications more capable.' },
  ]

  return (
    <section id="about" className="about-section scroll-mt-24 px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="about-code-card relative overflow-hidden rounded-2xl border p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
              <span className="font-mono text-xs text-slate-500">about-maria.js</span>
            </div>
            <div className="space-y-4 py-7 font-mono text-xs leading-7 sm:text-sm">
              <p className="text-slate-500">// What drives my work</p>
              <p><span className="code-purple">const</span> <span className="code-blue">approach</span> = {'{'}</p>
              <p className="pl-5 text-slate-300">curiosity: <span className="code-green">true</span>,</p>
              <p className="pl-5 text-slate-300">problemSolving: <span className="code-green">true</span>,</p>
              <p className="pl-5 text-slate-300">attentionToDetail: <span className="code-green">true</span>,</p>
              <p className="pl-5 text-slate-300">learning: <span className="code-green">'always'</span></p>
              <p>{'}'}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
              <div className="rounded-xl bg-white/[0.045] p-4"><p className="text-xs text-slate-500">Core focus</p><p className="mt-1 font-semibold text-white">Full-stack web</p></div>
              <div className="rounded-xl bg-white/[0.045] p-4"><p className="text-xs text-slate-500">Building with</p><p className="mt-1 font-semibold text-white">Modern tools</p></div>
            </div>
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"/>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">A little about me</p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.7rem]">
              I build beyond the screen<span className="text-cyan-300">.</span>
            </h2>
            <div className="mt-7 max-w-2xl space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
              <p>I'm Maria Khan, a full-stack web developer who enjoys turning real-world needs into practical digital products. I like working through the whole problem — understanding the interface, shaping the data, connecting the backend and making the pieces work together.</p>
              <p>My work includes Laravel, PHP, React and MySQL, along with AI and payment integrations. I've built projects ranging from an AI-assisted e-commerce platform to connected web and Android attendance tools.</p>
              <p>I value clear communication, thoughtful details and solutions that are useful beyond the first screen.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-12">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">How I contribute</p><h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">A product-minded approach.</h3></div>
            <p className="max-w-md text-sm leading-6 text-slate-400">A strong product is more than a collection of screens. Every layer needs to work together.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.number} className="strength-card rounded-2xl border p-6 transition duration-300 hover:-translate-y-1">
                <p className="text-xs font-bold tracking-[0.16em] text-cyan-300">{item.number}</p>
                <h4 className="mt-5 text-xl font-semibold tracking-tight text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
