function Skills() {
  const groups = [
    { number: '01', title: 'Frontend', description: 'Building responsive, accessible interfaces and interactive user experiences.', skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
    { number: '02', title: 'Backend & data', description: 'Developing application logic, secure workflows, APIs and data-driven systems.', skills: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Authentication', 'Database Design'] },
    { number: '03', title: 'AI & integrations', description: 'Connecting applications with intelligent services and third-party platforms.', skills: ['Groq AI', 'AI APIs', 'Stripe', 'Cloudinary', 'Third-Party APIs'] },
    { number: '04', title: 'Mobile & connected systems', description: 'Experience connecting web platforms with native Android applications.', skills: ['Kotlin', 'Android', 'QR Integration', 'GPS', 'Volley'] },
  ]

  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-cyan-300">Capabilities & toolkit</p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] text-white sm:text-5xl lg:text-[3.7rem]">The tools behind <span className="text-cyan-300">the work.</span></h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-slate-400 lg:ml-auto">I work across the product stack — from the interface people use to the backend, data and integrations that make it function.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.number} className="skill-panel group rounded-2xl border p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div><p className="font-mono text-xs text-cyan-300">{group.number} / 04</p><h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{group.title}</h3></div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[.07] font-mono text-sm text-cyan-200">&lt;/&gt;</span>
              </div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">{group.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-xs font-medium text-slate-300 transition group-hover:border-cyan-300/20">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
