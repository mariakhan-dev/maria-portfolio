import { useEffect, useState } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    {
      id: 'attendance',
      number: '01',
      label: 'Featured System',
      title: 'Smart Attendance System',
      subtitle: 'QR + GPS Attendance Platform',
      description:
        'A connected attendance ecosystem for administrators, teachers and students, combining web portals with a native Android app for QR attendance, GPS validation and real-time monitoring.',
      showcase: '/projects/attendance/showcase/attendance-main.png',
      liveUrl: 'https://smart-attendance.lovestoblog.com/',
      stack: ['PHP', 'MySQL', 'Kotlin', 'Android', 'QR', 'GPS'],
      highlights: ['3 Connected Systems', 'QR Attendance', 'GPS Validation', 'Real-Time Monitoring'],
      systems: [
        {
          number: '01',
          name: 'Admin Portal',
          type: 'Web Administration',
          showcase: '/projects/attendance/admin/admin-showcase.png',
          description:
            'Centralized management for students, teachers, classes, subjects and academic assignments.',
          features: [
            'Dashboard',
            'Student management',
            'Teacher management',
            'Classes & subjects',
            'Academic assignments',
            'System settings',
          ],
          screenshots: [
            { image: '/projects/attendance/admin/dashboard.png', label: 'Dashboard' },
            { image: '/projects/attendance/admin/manage-teachers.png', label: 'Teacher Management' },
          ],
        },
        {
          number: '02',
          name: 'Teacher Portal',
          type: 'Attendance Management',
          showcase: '/projects/attendance/teacher/teacher-showcase.png',
          description:
            'Teachers can create attendance sessions, display QR codes, monitor attendance and review session history.',
          features: [
            'Attendance sessions',
            'Dynamic QR',
            'Live monitoring',
            'Attendance history',
            'Session management',
            'Light & dark theme',
          ],
          screenshots: [
            { image: '/projects/attendance/teacher/dashboard.png', label: 'Teacher Dashboard' },
            { image: '/projects/attendance/teacher/qr-session.png', label: 'Live QR Session' },
            { image: '/projects/attendance/teacher/attendance-history.png', label: 'Attendance History' },
            { image: '/projects/attendance/teacher/settings-dark.png', label: 'Dark Theme' },
          ],
        },
        {
          number: '03',
          name: 'Student Android App',
          type: 'Native Kotlin App',
          showcase: '/projects/attendance/student/student-showcase.png',
          description:
            'Students scan classroom QR codes, validate their location and access attendance information from their phones.',
          features: [
            'QR scanning',
            'GPS validation',
            'Attendance history',
            'Student profile',
            'Academic information',
            'Native Android experience',
          ],
          screenshots: [
            { image: '/projects/attendance/student/splash.png', label: 'Student Portal' },
            { image: '/projects/attendance/student/scan.png', label: 'QR Scanner' },
            { image: '/projects/attendance/student/history.png', label: 'Attendance History' },
            { image: '/projects/attendance/student/profile.png', label: 'Profile' },
          ],
        },
      ],
    },
    {
      id: 'novacart',
      number: '02',
      label: 'AI Commerce Project',
      title: 'NovaCart AI',
      subtitle: 'Full-Stack AI E-Commerce Platform',
      description:
        'A modern commerce platform combining a complete customer storefront with administration, inventory, payments and an AI shopping assistant.',
      showcase: '/projects/novacart/showcase/novacart-main.png',
      liveUrl: 'https://novacart-ai.alwaysdata.net/',
      githubUrl: 'https://github.com/mariakhan-dev/novacart-ai',
      stack: ['Laravel', 'PHP', 'PostgreSQL', 'Stripe', 'Groq AI', 'Cloudinary', 'Tailwind'],
      highlights: ['Customer Storefront', 'Admin Dashboard', 'AI Assistant', 'Stripe Checkout'],
      systems: [
        {
          number: '01',
          name: 'Customer Storefront',
          type: 'Shopping Experience',
          showcase: '/projects/novacart/customer/customer-showcase.png',
          description:
            'Product discovery, favorites, cart, checkout and AI-assisted recommendations in a polished customer experience.',
          features: [
            'Modern storefront',
            'Product discovery',
            'Smart search',
            'Favorites & cart',
            'AI shopping assistant',
            'Stripe checkout',
          ],
          screenshots: [
            { image: '/projects/novacart/customer/home.png', label: 'Home Page' },
            { image: '/projects/novacart/customer/products.png', label: 'Products' },
            { image: '/projects/novacart/customer/ai-assistant.png', label: 'AI Assistant' },
            { image: '/projects/novacart/customer/product-details.png', label: 'Product Details' },
          ],
        },
        {
          number: '02',
          name: 'Admin Dashboard',
          type: 'Store Management',
          showcase: '/projects/novacart/admin/admin-showcase.png',
          description:
            'A focused back-office workspace for products, categories, inventory, orders and store operations.',
          features: [
            'Admin dashboard',
            'Product management',
            'Category management',
            'Stock control',
            'Order management',
            'Store analytics',
          ],
          screenshots: [
            { image: '/projects/novacart/admin/dashboard.png', label: 'Admin Dashboard' },
          ],
        },
      ],
    },
  ]

  const openProject = (project) => setSelectedProject(project)
  const closeProject = () => setSelectedProject(null)

  const openImage = (image, label) => {
    setSelectedImage({ image, label })
  }

  const closeImage = () => setSelectedImage(null)

  useEffect(() => {
    document.body.style.overflow = selectedProject || selectedImage ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject, selectedImage])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (selectedImage) {
          closeImage()
        } else if (selectedProject) {
          closeProject()
        }
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedImage, selectedProject])

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-white px-6 py-24 lg:px-10"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-orange-600">
                Selected Work
              </p>

              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl lg:text-[3.8rem]">
                Complete systems.
                <br />
                <span className="text-orange-600">Built to work.</span>
              </h2>
            </div>

            <p className="max-w-lg text-lg leading-8 text-gray-500 lg:ml-auto">
              Real full-stack products spanning multiple roles, interfaces,
              databases, APIs and production workflows.
            </p>
          </div>

          <div className="space-y-10">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#f8f6f1] transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
              >
                <button
                  onClick={() => openImage(project.showcase, `${project.title} overview`)}
                  className="relative block w-full cursor-zoom-in overflow-hidden bg-[#ebe8e1]"
                  aria-label={`Open ${project.title} image`}
                >
                  <img
                    src={project.showcase}
                    alt={`${project.title} showcase`}
                    className="h-auto max-h-[620px] w-full object-contain transition duration-700 group-hover:scale-[1.01]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-xl md:left-7 md:top-7">
                    <span className="text-xs font-black uppercase tracking-[0.14em]">
                      {project.number} — {project.label}
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5 rounded-full bg-black/80 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    Click to enlarge ↗
                  </div>
                </button>

                <div className="p-7 md:p-9 lg:p-10">
                  <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.17em] text-orange-600">
                        {project.subtitle}
                      </p>

                      <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-2xl leading-7 text-gray-600">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-gray-400">
                        Product Areas
                      </p>

                      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                        {project.systems.map((system) => (
                          <div
                            key={system.name}
                            className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xs font-black text-orange-600">
                              {system.number}
                            </span>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold">{system.name}</p>
                              <p className="truncate text-xs text-gray-400">{system.type}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-6 border-t border-black/10 pt-7 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black transition hover:border-orange-600 hover:text-orange-600"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      <button
                        onClick={() => openProject(project)}
                        className="cursor-pointer rounded-full bg-neutral-950 px-6 py-3 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
                      >
                        Explore Project →
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-6 rounded-[2rem] bg-neutral-950 px-7 py-6 text-white md:flex-row md:items-center lg:px-9">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.17em] text-orange-500">
                03 — React Project
              </p>

              <h3 className="mt-1 text-2xl font-black">Maria Developer Portfolio</h3>

              <p className="mt-2 text-sm text-gray-400">
                The site you are exploring — built with React, Vite and Tailwind CSS.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 backdrop-blur-md"
          onClick={closeProject}
        >
          <div
            className="min-h-screen bg-[#f8f6f1]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f6f1]/95 backdrop-blur-xl">
              <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-600 md:text-xs">
                    Project Case Study
                  </p>
                  <h3 className="text-lg font-black md:text-xl">{selectedProject.title}</h3>
                </div>

                <button
                  onClick={closeProject}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-black text-xl text-white transition hover:bg-orange-600"
                  aria-label="Close project"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                    {selectedProject.subtitle}
                  </p>

                  <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">
                    {selectedProject.title}
                  </h2>

                  <p className="mt-6 max-w-2xl leading-7 text-gray-600">
                    {selectedProject.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {selectedProject.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-600"
                      >
                        Open Live Demo ↗
                      </a>
                    )}

                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black transition hover:border-orange-600 hover:text-orange-600"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>

                <button
                  onClick={() =>
                    openImage(selectedProject.showcase, `${selectedProject.title} overview`)
                  }
                  className="group relative cursor-zoom-in overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl"
                >
                  <img
                    src={selectedProject.showcase}
                    alt={selectedProject.title}
                    className="h-auto max-h-[520px] w-full object-contain"
                  />
                  <div className="absolute bottom-4 right-4 rounded-full bg-black/80 px-4 py-2 text-xs font-bold text-white opacity-0 transition group-hover:opacity-100">
                    View full image ↗
                  </div>
                </button>
              </div>

              <div className="mt-16">
                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-600">
                      Inside The Project
                    </p>
                    <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                      Product areas & real interfaces
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-gray-500">
                    A concise look at the main modules. Click any screenshot to inspect the full interface.
                  </p>
                </div>

                <div className="space-y-10">
                  {selectedProject.systems.map((system) => (
                    <section
                      key={system.name}
                      className="overflow-hidden rounded-[2rem] border border-black/10 bg-white"
                    >
                      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                        <div className="border-b border-black/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
                          <p className="text-xs font-black uppercase tracking-[0.17em] text-orange-600">
                            {system.number} — {system.type}
                          </p>

                          <h4 className="mt-2 text-2xl font-black md:text-3xl">{system.name}</h4>

                          <p className="mt-4 text-sm leading-6 text-gray-600">
                            {system.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {system.features.slice(0, 5).map((feature) => (
                              <span
                                key={feature}
                                className="rounded-full bg-[#f8f6f1] px-3 py-2 text-xs font-bold"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={() => openImage(system.showcase, `${system.name} showcase`)}
                            className="group relative mt-7 block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-black/10 bg-[#f4f2ed]"
                          >
                            <img
                              src={system.showcase}
                              alt={`${system.name} showcase`}
                              className="h-auto max-h-[300px] w-full object-contain"
                            />
                            <div className="absolute bottom-3 right-3 rounded-full bg-black/80 px-3 py-1.5 text-[11px] font-bold text-white opacity-0 transition group-hover:opacity-100">
                              Enlarge ↗
                            </div>
                          </button>
                        </div>

                        <div className="p-6 md:p-8">
                          <div className="mb-5 flex items-center justify-between gap-4">
                            <p className="text-xs font-black uppercase tracking-[0.17em] text-gray-400">
                              Real Interface Screens
                            </p>
                            <p className="hidden text-xs text-gray-400 sm:block">Click to enlarge</p>
                          </div>

                          <div
                            className={`grid gap-4 ${
                              system.screenshots.length === 1
                                ? 'grid-cols-1'
                                : 'sm:grid-cols-2'
                            }`}
                          >
                            {system.screenshots.map((screen) => (
                              <button
                                key={screen.image}
                                onClick={() => openImage(screen.image, screen.label)}
                                className="group cursor-zoom-in overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f5] text-left transition hover:-translate-y-0.5 hover:shadow-lg"
                              >
                                <div className="flex min-h-[220px] items-center justify-center overflow-hidden p-3">
                                  <img
                                    src={screen.image}
                                    alt={screen.label}
                                    className="max-h-[360px] w-full object-contain transition duration-500 group-hover:scale-[1.015]"
                                  />
                                </div>

                                <div className="flex items-center justify-between border-t border-black/10 bg-white px-4 py-3">
                                  <p className="text-sm font-bold">{screen.label}</p>
                                  <span className="text-xs font-black text-orange-600">↗</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <div className="mt-14 flex flex-col justify-between gap-7 rounded-[2rem] bg-neutral-950 p-8 text-white md:p-10 lg:flex-row lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.17em] text-orange-500">
                    Technology Stack
                  </p>
                  <h3 className="mt-3 text-2xl font-black md:text-3xl">
                    Built with production-ready technologies.
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end">
                  {selectedProject.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-bold"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <button
                  onClick={closeProject}
                  className="cursor-pointer rounded-full bg-black px-7 py-4 font-bold text-white transition hover:bg-orange-600"
                >
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-3 md:p-8"
          onClick={closeImage}
        >
          <div
            className="relative flex h-full w-full max-w-[1500px] flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-400">
                  Full Screen Preview
                </p>
                <p className="mt-1 text-sm font-bold md:text-base">{selectedImage.label}</p>
              </div>

              <button
                onClick={closeImage}
                className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-xl font-bold text-black transition hover:bg-orange-500 hover:text-white"
                aria-label="Close image"
              >
                ×
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto rounded-2xl bg-[#111] p-2 md:p-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.label}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <p className="mt-3 text-center text-xs text-white/50">
              Click outside the image or press Esc to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
