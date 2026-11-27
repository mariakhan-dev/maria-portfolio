function About() {
  const strengths = [
    {
      number: '01',
      title: 'Frontend experiences',
      description: 'Responsive, accessible interfaces designed to make complex workflows feel clear and intuitive.',
    },
    {
      number: '02',
      title: 'Backend foundations',
      description: 'Application logic, database design, authentication and APIs that connect the whole product.',
    },
    {
      number: '03',
      title: 'Useful integrations',
      description: 'AI services, payment workflows and external tools that extend what an application can do.',
    },
  ]

  return (
    <section id="about" className="scroll-mt-24 bg-white px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[31rem]">
            <div className="absolute -inset-3 -rotate-3 rounded-[2.2rem] bg-orange-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-[#f8f6f1] shadow-2xl shadow-neutral-950/10">
              <img
                src="/images/maria-developer.png"
                alt="Maria Khan working in web development"
                loading="lazy"
                className="h-[390px] w-full object-cover object-center sm:h-[470px]"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-neutral-950 px-5 py-4 text-white shadow-xl sm:right-0">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-orange-400">What I build</p>
              <p className="mt-1 text-sm font-bold sm:text-base">Complete web applications</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-600">A little about me</p>
            <h2 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-neutral-950 sm:text-5xl lg:text-[3.7rem]">
              I care about how a product <span className="text-orange-600">works</span> — and how it feels.
            </h2>
            <div className="mt-7 max-w-2xl space-y-4 text-base leading-8 text-neutral-600 sm:text-lg">
              <p>
                I'm Maria Khan, a full-stack web developer who enjoys turning real-world needs into practical digital products. I like working through the whole problem — understanding the interface, shaping the data, connecting the backend and making the pieces work together.
              </p>
              <p>
                My experience includes Laravel, PHP, React and MySQL, along with AI and payment integrations. I've worked on projects ranging from an AI-assisted e-commerce platform to connected web and Android attendance tools.
              </p>
              <p>
                I value clear communication, thoughtful details and solutions that are useful beyond the first screen.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ['End-to-end', 'Product development'],
                ['Web + mobile', 'Connected experiences'],
                ['AI + APIs', 'Practical integrations'],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-neutral-200 bg-[#f8f6f1] p-4 sm:p-5">
                  <p className="text-lg font-black tracking-tight text-neutral-950">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-neutral-200 pt-12">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">How I contribute</p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">A product-minded approach.</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-neutral-500">A strong product is more than a collection of screens. Every layer needs to work together.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.number} className="rounded-2xl border border-neutral-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/[0.05]">
                <p className="text-xs font-black tracking-[0.16em] text-orange-600">{item.number}</p>
                <h4 className="mt-5 text-xl font-black tracking-tight text-neutral-950">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-neutral-500">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
