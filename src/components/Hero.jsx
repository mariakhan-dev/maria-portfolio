function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 lg:px-10">
      <div className="max-w-7xl mx-auto w-full py-20">

        <div className="max-w-4xl">

          {/* Small introduction */}
          <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-6">
            Full-Stack & Mobile Developer
          </p>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            I build
            <br />
            <span className="text-orange-600">digital products</span>
            <br />
            that solve real problems.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-600 leading-8">
            I'm Maria Khan, a developer who builds practical web and mobile
            applications using modern technologies. From e-commerce platforms
            to attendance systems and mobile apps, I enjoy turning ideas into
            working products.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              'Laravel',
              'React',
              'Flutter',
              'Kotlin',
              'Firebase',
              'MySQL',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-black/10 bg-white text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="bg-black text-white px-7 py-4 rounded-full font-bold hover:bg-orange-600 transition"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="border border-black px-7 py-4 rounded-full font-bold hover:bg-black hover:text-white transition"
            >
              Let's Talk
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero