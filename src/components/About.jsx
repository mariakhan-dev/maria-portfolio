function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-5">
              About Me
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Developer who
              <br />
              <span className="text-orange-600">builds, learns & ships.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="text-gray-600 text-lg leading-8">

            <p>
              I'm a software developer focused on building practical web and
              mobile applications. I enjoy working across the frontend,
              backend, databases and APIs to turn ideas into complete,
              functional products.
            </p>

            <p className="mt-6">
              My experience includes building a Laravel-based e-commerce
              platform with AI assistance, a smart attendance system with
              Android and PHP components, and mobile applications using
              Flutter, Firebase and APIs.
            </p>

            <p className="mt-6">
              I care about more than simply writing code. I like understanding
              the problem first, designing a useful solution, testing it and
              continuously improving the final product.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="border-l-4 border-orange-600 pl-5">
                <p className="text-3xl font-black text-black">4+</p>
                <p className="text-sm mt-1">Major Projects</p>
              </div>

              <div className="border-l-4 border-orange-600 pl-5">
                <p className="text-3xl font-black text-black">5+</p>
                <p className="text-sm mt-1">Technologies</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About