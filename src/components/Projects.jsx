import { useState } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  const projects = [
    {
      number: '01',
      title: 'NovaCart AI',
      type: 'E-Commerce Web Application',
      description:
        'A full-stack e-commerce platform with product management, categories, cart and checkout, order management, Stripe payments, WhatsApp ordering, favorites and an AI shopping assistant.',
      technologies: [
        'Laravel',
        'PHP',
        'MySQL',
        'Tailwind CSS',
        'AI API',
        'Stripe',
      ],
      images: [
        '/projects/novacart/home.png',
        '/projects/novacart/product.png',
        '/projects/novacart/ai.png',
        '/projects/novacart/admin.png',
      ],
    },

    {
      number: '02',
      title: 'Smart Attendance System',
      type: 'Android + Web System',
      description:
        'A smart attendance platform combining an Android student application with a PHP/MySQL backend. The system uses QR-based attendance with session control and location validation.',
      technologies: [
        'Kotlin',
        'PHP',
        'MySQL',
        'Android',
        'Volley',
        'GPS',
      ],
      images: [
        '/projects/attendance/dashboard.png',
        '/projects/attendance/scan.png',
        '/projects/attendance/history.png',
        '/projects/attendance/teacher.png',
      ],
    },

    {
      number: '03',
      title: 'Smart Todo',
      type: 'Mobile Application',
      description:
        'A Flutter task management application with Firebase authentication, cloud data storage, task completion, recycle bin, profile management and light/dark theme support.',
      technologies: [
        'Flutter',
        'Dart',
        'Firebase',
        'Firestore',
        'Provider',
      ],
      images: [
        '/projects/todo/home.png',
        '/projects/todo/tasks.png',
        '/projects/todo/profile.png',
      ],
    },

    {
      number: '04',
      title: 'Blog Application',
      type: 'Mobile Application',
      description:
        'A Flutter-based blog application that consumes an external API to retrieve and display blog content through a mobile-friendly interface.',
      technologies: ['Flutter', 'Dart', 'REST API'],
      images: [
        '/projects/blog/home.png',
        '/projects/blog/article.png',
        '/projects/blog/another.png',
      ],
    },
  ]

  const openProject = (project) => {
    setSelectedProject(project)
    setActiveImage(0)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <section id="projects" className="py-28 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="max-w-3xl mb-20">
            <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-5">
              Selected Work
            </p>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Things I've
              <br />
              <span className="text-orange-600">built.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              A selection of projects I've worked on across web development,
              Android and cross-platform mobile development.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-20">

            {projects.map((project, index) => {
              const reversed = index % 2 !== 0

              return (
                <article key={project.number} className="group">

                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                      reversed
                        ? 'lg:[&>*:first-child]:order-2'
                        : ''
                    }`}
                  >

                    {/* Main Screenshot */}
                    <div className="relative">

                      <button
                        onClick={() => openProject(project)}
                        className="block w-full text-left cursor-pointer"
                      >
                        <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#f8f6f1] shadow-sm">
                          <img
                            src={project.images[0]}
                            alt={`${project.title} screenshot`}
                            className="w-full aspect-[16/10] object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                      </button>

                      {/* Number */}
                      <div className="absolute -top-4 -left-3 md:-left-5 pointer-events-none">
                        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white font-black shadow-lg">
                          {project.number}
                        </span>
                      </div>

                    </div>

                    {/* Content */}
                    <div className="py-4">

                      <p className="text-orange-600 text-sm font-bold uppercase tracking-[0.15em]">
                        {project.type}
                      </p>

                      <h3 className="text-4xl md:text-5xl font-black tracking-tight mt-3 group-hover:text-orange-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-lg leading-8 mt-5 max-w-xl">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-7">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="px-3 py-1.5 bg-[#f8f6f1] border border-black/5 rounded-full text-xs font-bold"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Showcase Button */}
                      <button
                        onClick={() => openProject(project)}
                        className="flex items-center gap-3 mt-8 text-sm font-bold cursor-pointer"
                      >
                        <span className="w-10 h-px bg-black group-hover:w-16 group-hover:bg-orange-600 transition-all duration-300" />

                        <span className="group-hover:text-orange-600 transition-colors">
                          View Project
                        </span>

                        <span className="text-xl group-hover:translate-x-1 group-hover:text-orange-600 transition-all">
                          ↗
                        </span>
                      </button>

                    </div>

                  </div>

                  {/* Small previews */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 lg:mt-8 lg:max-w-[58%]">

                    {project.images.slice(1).map((image, imageIndex) => (
                      <button
                        key={image}
                        onClick={() => {
                          openProject(project)
                          setActiveImage(imageIndex + 1)
                        }}
                        className={`overflow-hidden rounded-2xl border border-black/10 bg-[#f8f6f1] cursor-pointer ${
                          imageIndex === 2 ? 'hidden md:block' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${imageIndex + 2}`}
                          className="w-full aspect-[16/10] object-cover object-top transition duration-500 hover:scale-105"
                        />
                      </button>
                    ))}

                  </div>

                </article>
              )
            })}

          </div>

        </div>
      </section>

      {/* =========================
          PROJECT SHOWCASE MODAL
      ========================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeProject}
        >

          <div
            className="relative w-full max-w-6xl max-h-[92vh] bg-[#f8f6f1] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 md:px-8 border-b border-black/10">

              <div>
                <p className="text-orange-600 text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
                  {selectedProject.type}
                </p>

                <h3 className="text-2xl md:text-3xl font-black mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={closeProject}
                className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-xl font-bold hover:bg-black hover:text-white transition cursor-pointer"
                aria-label="Close project showcase"
              >
                ×
              </button>

            </div>

            {/* Main Image */}
            <div className="p-4 md:p-8 overflow-y-auto max-h-[75vh]">

              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
                <img
                  src={selectedProject.images[activeImage]}
                  alt={`${selectedProject.title} showcase`}
                  className="w-full max-h-[55vh] object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-5 overflow-x-auto pb-2">

                {selectedProject.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 rounded-xl overflow-hidden border-2 cursor-pointer transition ${
                      activeImage === index
                        ? 'border-orange-600'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                      className="w-28 md:w-36 aspect-[16/10] object-cover object-top"
                    />
                  </button>
                ))}

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default Projects