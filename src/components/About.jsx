function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute -inset-3 bg-orange-100 rounded-[2.2rem] -rotate-3" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-xl bg-[#f8f6f1]">

              <img
                src="/images/maria-developer.png"
                alt="Maria Khan - Web Developer"
                className="w-full h-[430px] object-cover object-center"
              />

            </div>

            <div className="absolute -bottom-5 right-5 bg-black text-white px-5 py-4 rounded-2xl shadow-xl">
              <p className="text-xs text-orange-400 uppercase tracking-[0.15em] font-bold">
                Focus
              </p>
              <p className="font-black mt-1">
                Full-Stack Web Development
              </p>
            </div>

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-orange-600 font-black tracking-[0.2em] uppercase text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[3.6rem] font-black tracking-[-0.04em] leading-[0.98]">
              I turn ideas into
              <br />
              <span className="text-orange-600">
                complete products.
              </span>
            </h2>

            <div className="mt-7 text-gray-600 text-lg leading-8 max-w-2xl">

              <p>
                I'm Maria Khan, a full-stack web developer focused on building
                practical, complete digital products — not just interfaces.
              </p>

              <p className="mt-5">
                I work across frontend, backend, databases and APIs, with
                experience in Laravel, PHP, React, MySQL and integrations such
                as payments and AI services.
              </p>

              <p className="mt-5">
                My work includes an AI-powered e-commerce platform and a
                multi-system smart attendance solution combining web portals
                with a Kotlin Android application.
              </p>

            </div>

            {/* QUICK FACTS */}
            <div className="grid sm:grid-cols-3 gap-4 mt-9">

              <div className="bg-[#f8f6f1] border border-black/10 rounded-2xl p-5">
                <p className="text-2xl font-black">3+</p>
                <p className="text-sm text-gray-500 mt-1">
                  Major Products
                </p>
              </div>

              <div className="bg-[#f8f6f1] border border-black/10 rounded-2xl p-5">
                <p className="text-2xl font-black">Full-Stack</p>
                <p className="text-sm text-gray-500 mt-1">
                  Development
                </p>
              </div>

              <div className="bg-[#f8f6f1] border border-black/10 rounded-2xl p-5">
                <p className="text-2xl font-black">Web + App</p>
                <p className="text-sm text-gray-500 mt-1">
                  Product Experience
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About