function Skills() {
  const skills = {
    primary: [
      'Laravel',
      'PHP',
      'React',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],

    backend: [
      'MySQL',
      'REST APIs',
      'Authentication',
      'Database Design',
      'Firebase',
    ],

    integrations: [
      'Groq AI',
      'AI APIs',
      'Stripe',
      'WhatsApp',
      'Third-Party APIs',
    ],

    mobile: [
      'Kotlin',
      'Android',
      'Volley',
      'GPS',
      'QR Integration',
    ],
  }

  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-10 bg-[#f8f6f1]"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">

          <div>
            <p className="text-orange-600 font-black tracking-[0.2em] uppercase text-sm mb-4">
              Skills & Technologies
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[3.7rem] font-black tracking-[-0.045em] leading-[0.96]">
              The stack behind
              <br />
              <span className="text-orange-600">
                my work.
              </span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-8 max-w-lg lg:ml-auto">
            I work across the complete web development process — from
            interfaces and application logic to databases, APIs and
            third-party integrations.
          </p>

        </div>

        {/* BENTO GRID */}
        <div className="grid lg:grid-cols-12 gap-5">

          {/* MAIN WEB DEVELOPMENT */}
          <div className="lg:col-span-7 bg-neutral-950 text-white rounded-[2rem] p-8 lg:p-10 relative overflow-hidden">

            <div className="absolute -right-16 -top-16 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl" />

            <div className="relative">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-orange-500 text-xs font-black tracking-[0.17em] uppercase">
                    Primary Focus
                  </p>

                  <h3 className="text-3xl md:text-4xl font-black mt-3">
                    Web Development
                  </h3>
                </div>

                <span className="text-orange-500 text-3xl font-mono">
                  &lt;/&gt;
                </span>

              </div>

              <p className="text-gray-400 leading-7 mt-5 max-w-xl">
                Building responsive full-stack applications with modern
                interfaces, backend logic and maintainable architecture.
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {skills.primary.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Small code decoration */}
              <div className="mt-10 border-t border-white/10 pt-6 font-mono text-sm">

                <p className="text-gray-600">
                  <span className="text-orange-400">const</span>{' '}
                  developer = {'{'}
                </p>

                <p className="text-gray-500 pl-5 mt-2">
                  focus:{' '}
                  <span className="text-green-400">
                    'full-stack web'
                  </span>,
                </p>

                <p className="text-gray-500 pl-5 mt-2">
                  mindset:{' '}
                  <span className="text-green-400">
                    'build real products'
                  </span>
                </p>

                <p className="text-gray-600 mt-2">
                  {'}'}
                </p>

              </div>

            </div>

          </div>

          {/* BACKEND */}
          <div className="lg:col-span-5 bg-white border border-black/10 rounded-[2rem] p-8">

            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-black text-xl">
              DB
            </div>

            <h3 className="text-2xl font-black mt-6">
              Backend & Database
            </h3>

            <p className="text-gray-500 leading-7 mt-3">
              Server-side development, application data, authentication
              and API-driven workflows.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {skills.backend.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-full bg-[#f8f6f1] border border-black/5 text-sm font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* INTEGRATIONS */}
          <div className="lg:col-span-7 bg-white border border-black/10 rounded-[2rem] p-8">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div className="max-w-md">

                <p className="text-orange-600 text-xs font-black uppercase tracking-[0.17em]">
                  Beyond CRUD
                </p>

                <h3 className="text-2xl font-black mt-2">
                  AI & Integrations
                </h3>

                <p className="text-gray-500 leading-7 mt-3">
                  Connecting applications with payments, AI services and
                  external platforms to build more capable products.
                </p>

              </div>

              <div className="flex flex-wrap md:max-w-[280px] gap-2">
                {skills.integrations.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-orange-50 border border-orange-100 text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* MOBILE SUPPORTING SKILL */}
          <div className="lg:col-span-5 bg-orange-600 text-white rounded-[2rem] p-8">

            <p className="text-orange-100 text-xs font-black uppercase tracking-[0.17em]">
              Additional Experience
            </p>

            <h3 className="text-2xl font-black mt-2">
              Android Development
            </h3>

            <p className="text-orange-100 leading-7 mt-3">
              Supporting my web expertise with native Android experience,
              including connected mobile and backend systems.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {skills.mobile.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-full bg-white/15 border border-white/15 text-sm font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills