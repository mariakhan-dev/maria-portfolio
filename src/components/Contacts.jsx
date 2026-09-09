import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,

          subject: `New Portfolio Message from ${form.name}`,

          from_name: 'Maria Portfolio',

          name: form.name,
          email: form.email,
          project: form.project,
          message: form.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')

        setForm({
          name: '',
          email: '',
          project: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-10 bg-[#f8f6f1] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -right-40 top-20 w-[450px] h-[450px] bg-orange-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32">

            <p className="text-orange-600 font-black tracking-[0.2em] uppercase text-sm mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-black tracking-[-0.05em] leading-[0.95]">
              Have a project
              <br />
              in mind?
              <br />

              <span className="text-orange-600">
                Let's build it.
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-7 max-w-lg">
              Need a website, full-stack web application or custom digital
              solution? Tell me what you're building and I'll get back to you.
            </p>

            {/* Availability */}
            <div className="mt-9 inline-flex items-center gap-3 bg-white border border-black/10 rounded-full px-4 py-3 shadow-sm">

              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />

                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>

              <span className="text-sm font-bold">
                Available for new projects
              </span>

            </div>

          </div>


          {/* FORM */}
          <div className="bg-white border border-black/10 rounded-[2rem] p-6 md:p-9 lg:p-10 shadow-xl shadow-black/[0.04]">

            <div className="mb-8">
              <p className="text-sm text-gray-400 font-bold uppercase tracking-[0.15em]">
                Start a conversation
              </p>

              <h3 className="text-2xl md:text-3xl font-black mt-2">
                Tell me about your project.
              </h3>
            </div>


            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-[#f8f6f1] border border-black/10 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                  />
                </div>


                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-[#f8f6f1] border border-black/10 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                  />
                </div>

              </div>


              {/* Project Type */}
              <div>

                <label
                  htmlFor="project"
                  className="block text-sm font-bold mb-2"
                >
                  What do you need?
                </label>

                <select
                  id="project"
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#f8f6f1] border border-black/10 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                >
                  <option value="">
                    Select project type
                  </option>

                  <option value="Business Website">
                    Business Website
                  </option>

                  <option value="E-Commerce Website">
                    E-Commerce Website
                  </option>

                  <option value="Full-Stack Web Application">
                    Full-Stack Web Application
                  </option>

                  <option value="WordPress Website">
                    WordPress Website
                  </option>

                  <option value="Website Redesign">
                    Website Redesign
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-2"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me a little about your project, goals and what you'd like to build..."
                  className="w-full px-5 py-4 rounded-2xl bg-[#f8f6f1] border border-black/10 outline-none resize-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition"
                />

              </div>


              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto bg-neutral-950 text-white px-7 py-4 rounded-full font-bold hover:bg-orange-600 hover:-translate-y-1 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {loading
                  ? 'Sending...'
                  : 'Send Message →'}
              </button>


              {/* SUCCESS */}
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-5 py-4">
                  <p className="font-bold">
                    Message sent successfully! ✓
                  </p>

                  <p className="text-sm mt-1">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              )}


              {/* ERROR */}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl px-5 py-4">
                  <p className="font-bold">
                    Message couldn't be sent.
                  </p>

                  <p className="text-sm mt-1">
                    Please try again in a moment.
                  </p>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact