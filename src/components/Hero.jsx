function Hero() {
  const tech = ['Laravel', 'React', 'PHP', 'MySQL', 'Kotlin', 'Firebase']

  return (
    <section className="relative overflow-hidden px-6 lg:px-10">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-orange-100/70 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-5rem)] py-16 lg:py-20 flex items-center">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center w-full">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-black/10 shadow-sm rounded-full mb-6">
              <span className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />

              <span className="text-xs font-bold tracking-[0.15em] uppercase">
                Available for Web Development Projects
              </span>
            </div>

            <p className="text-orange-600 font-black tracking-[0.2em] uppercase text-sm mb-5">
              Full-Stack Web Developer
            </p>

            {/* Smaller heading */}
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-black tracking-[-0.045em] leading-[0.98] text-neutral-950">
  I build modern
  <br />
  web experiences
  <br />
  that <span className="text-orange-600">work.</span>
</h1>

            <p className="mt-7 max-w-xl text-lg text-gray-600 leading-8">
              I'm <span className="font-bold text-neutral-900">Maria Khan</span>,
              a full-stack web developer building practical digital products —
              from AI-powered e-commerce platforms to complete multi-role
              management systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="bg-neutral-950 text-white px-7 py-3.5 rounded-full font-bold hover:bg-orange-600 hover:-translate-y-1 transition duration-300 shadow-lg"
              >
                Explore Projects →
              </a>

              <a
                href="#contact"
                className="bg-white border border-black/15 px-7 py-3.5 rounded-full font-bold hover:bg-black hover:text-white hover:-translate-y-1 transition duration-300"
              >
                Let's Work Together
              </a>

            </div>

            {/* Technologies */}
            <div className="mt-9">

              <p className="text-xs uppercase tracking-[0.18em] font-bold text-gray-400 mb-4">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2">

                {tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white border border-black/10 rounded-full text-sm font-semibold shadow-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT — MARIA IMAGE */}
          <div className="relative">

            {/* Orange back layer */}
            <div className="absolute -inset-3 bg-orange-100 rounded-[2.5rem] rotate-3" />

            <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-black/10 border border-black/10">

              <img
                src="/images/maria-developer.png"
                alt="Maria Khan - Web Developer"
                className="w-full h-[460px] xl:h-[500px] object-cover rounded-[2rem]"
              />

            </div>

            {/* Floating developer card */}
            <div className="absolute -bottom-5 -left-4 bg-neutral-950 text-white rounded-2xl px-4 py-3 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center font-black">
                  &lt;/&gt;
                </div>

                <div>
                  <p className="font-bold">
                    Maria Khan
                  </p>

                  <p className="text-gray-400 text-sm">
                    Full-Stack Web Developer
                  </p>
                </div>

              </div>

            </div>

            {/* Available badge */}
            <div className="absolute top-8 -right-5 bg-white rounded-2xl px-4 py-3 shadow-xl border border-black/10">

              <p className="text-xs text-gray-400 font-semibold">
                STATUS
              </p>

              <p className="text-sm font-bold mt-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Available
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero