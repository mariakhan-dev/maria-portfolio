function Contact() {
  return (
    <section id="contact" className="py-28 px-6 lg:px-10 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-end">

          {/* Heading */}
          <div>
            <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-5">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Have an idea?
              <br />
              <span className="text-orange-600">
                Let's build it.
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-7 max-w-xl">
              I'm always interested in learning, building useful products
              and working on interesting development projects.
            </p>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">

            <a
              href="mailto:your-email@example.com"
              className="block bg-white border border-black/5 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="text-lg font-bold mt-1">
                your-email@example.com
              </p>
            </a>

            <a
              href="#"
              className="block bg-white border border-black/5 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500">
                LinkedIn
              </p>

              <p className="text-lg font-bold mt-1">
                Connect with me →
              </p>
            </a>

            <a
              href="#"
              className="block bg-white border border-black/5 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500">
                GitHub
              </p>

              <p className="text-lg font-bold mt-1">
                View my code →
              </p>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact