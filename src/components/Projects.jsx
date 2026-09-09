import { useEffect, useState } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 'attendance',
      number: '01',
      label: 'Featured System',
      title: 'Smart Attendance System',
      subtitle: 'Multi-Portal Attendance Platform',
      description:
        'A complete attendance ecosystem connecting administrators, teachers and students through web portals and a native Android application with QR attendance, GPS validation and real-time monitoring.',

      showcase:
        '/projects/attendance/showcase/attendance-main.png',

      stack: ['PHP', 'MySQL', 'Kotlin', 'Android', 'QR', 'GPS'],

      highlights: [
        '3 Connected Systems',
        'QR Attendance',
        'GPS Validation',
        'Real-Time Monitoring',
      ],

      systems: [
        {
          number: '01',
          name: 'Admin Portal',
          type: 'Web Administration System',

          showcase:
            '/projects/attendance/admin/admin-showcase.png',

          description:
            'A centralized administration portal built to manage students, teachers, classes, subjects and the academic structure of the attendance system.',

          features: [
            'Admin dashboard',
            'Student management',
            'Teacher management',
            'Classes & subjects',
            'Academic assignments',
            'System settings',
          ],

          screenshots: [
            {
              image:
                '/projects/attendance/admin/dashboard.png',
              label: 'Dashboard',
            },
            {
              image:
                '/projects/attendance/admin/manage-teachers.png',
              label: 'Teacher Management',
            },
          ],
        },

        {
          number: '02',
          name: 'Teacher Portal',
          type: 'Attendance Management Portal',

          showcase:
            '/projects/attendance/teacher/teacher-showcase.png',

          description:
            'The teacher portal handles live attendance sessions, QR generation, class monitoring, attendance history and session management.',

          features: [
            'Create attendance sessions',
            'Dynamic QR attendance',
            'Live student monitoring',
            'Attendance history',
            'Session management',
            'Light & dark theme',
          ],

          screenshots: [
            {
              image:
                '/projects/attendance/teacher/dashboard.png',
              label: 'Teacher Dashboard',
            },
            {
              image:
                '/projects/attendance/teacher/qr-session.png',
              label: 'Live QR Session',
            },
            {
              image:
                '/projects/attendance/teacher/attendance-history.png',
              label: 'Attendance History',
            },
            {
              image:
                '/projects/attendance/teacher/settings-dark.png',
              label: 'Dark Theme',
            },
          ],
        },

        {
          number: '03',
          name: 'Student Android App',
          type: 'Native Kotlin Application',

          showcase:
            '/projects/attendance/student/student-showcase.png',

          description:
            'A native Android application enabling students to scan classroom QR codes, validate their location and access attendance information from their phones.',

          features: [
            'QR code scanning',
            'GPS validation',
            'Attendance history',
            'Student profile',
            'Academic information',
            'Native Android experience',
          ],

          screenshots: [
            {
              image:
                '/projects/attendance/student/splash.png',
              label: 'Student Portal',
            },
            {
              image:
                '/projects/attendance/student/scan.png',
              label: 'QR Scanner',
            },
            {
              image:
                '/projects/attendance/student/history.png',
              label: 'Attendance History',
            },
            {
              image:
                '/projects/attendance/student/profile.png',
              label: 'Profile',
            },
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
        'A modern e-commerce platform combining a complete customer shopping experience with store administration, payments, inventory control and an integrated AI shopping assistant.',

      showcase:
        '/projects/novacart/showcase/novacart-main.png',

      stack: [
        'Laravel',
        'PHP',
        'MySQL',
        'Stripe',
        'Groq AI',
        'Tailwind',
      ],

      highlights: [
        'Customer Storefront',
        'Admin Dashboard',
        'AI Assistant',
        'Payment Integration',
      ],

      systems: [
        {
          number: '01',
          name: 'Customer Storefront',
          type: 'Shopping Experience',

          showcase:
            '/projects/novacart/customer/customer-showcase.png',

          description:
            'The customer-facing experience provides product discovery, favorites, shopping cart, checkout and AI-assisted product recommendations.',

          features: [
            'Modern storefront',
            'Product discovery',
            'Smart search',
            'Product details',
            'Favorites & cart',
            'AI shopping assistant',
            'Secure checkout',
            'Stripe payments',
          ],

          screenshots: [
            {
              image:
                '/projects/novacart/customer/home.png',
              label: 'Home Page',
            },
            {
              image:
                '/projects/novacart/customer/products.png',
              label: 'Products',
            },
            {
              image:
                '/projects/novacart/customer/ai-assistant.png',
              label: 'AI Assistant',
            },
            {
              image:
                '/projects/novacart/customer/product-details.png',
              label: 'Product Details',
            },
          ],
        },

        {
          number: '02',
          name: 'Admin Dashboard',
          type: 'Store Management System',

          showcase:
            '/projects/novacart/admin/admin-showcase.png',

          description:
            'The administration system gives complete control over products, categories, stock levels and customer orders.',

          features: [
            'Admin dashboard',
            'Product management',
            'Category management',
            'Stock control',
            'Order management',
            'Store analytics',
          ],

          screenshots: [
            {
              image:
                '/projects/novacart/admin/dashboard.png',
              label: 'Admin Dashboard',
            },
          ],
        },
      ],
    },
  ]

  const openProject = (project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeProject()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
      {/* ==========================
          MAIN PROJECT SECTION
      =========================== */}
      <section
        id="projects"
        className="relative py-24 px-6 lg:px-10 bg-white overflow-hidden"
      >
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          {/* HEADER */}
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-end mb-14">
            <div>
              <p className="text-orange-600 text-sm font-black uppercase tracking-[0.2em] mb-4">
                Selected Work
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-[3.8rem] font-black tracking-[-0.05em] leading-[0.95]">
                Complete systems.
                <br />
                <span className="text-orange-600">
                  Not just screens.
                </span>
              </h2>
            </div>

            <p className="text-gray-500 text-lg leading-8 max-w-lg lg:ml-auto">
              Projects designed across multiple user roles, interfaces,
              databases, APIs and real-world workflows.
            </p>
          </div>

          {/* PROJECT CARDS */}
          <div className="space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group rounded-[2.2rem] border border-black/10 bg-[#f8f6f1] overflow-hidden hover:shadow-2xl hover:shadow-black/10 transition duration-500"
              >
                {/* SHOWCASE */}
                <button
                  onClick={() => openProject(project)}
                  className="relative block w-full overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.showcase}
                    alt={`${project.title} showcase`}
                    className="w-full aspect-[16/9] md:aspect-[16/8] object-cover transition duration-700 group-hover:scale-[1.015]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute top-5 left-5 md:top-7 md:left-7 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full shadow-lg">
                    <span className="text-xs font-black uppercase tracking-[0.14em]">
                      {project.number} — {project.label}
                    </span>
                  </div>
                </button>

                {/* PROJECT INFO */}
                <div className="p-7 md:p-9 lg:p-10">
                  <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8">

                    <div>
                      <p className="text-orange-600 text-xs font-black uppercase tracking-[0.17em]">
                        {project.subtitle}
                      </p>

                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.04em] mt-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 leading-7 mt-5 max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* SYSTEMS SUMMARY */}
                    <div>
                      <p className="text-xs text-gray-400 font-black uppercase tracking-[0.16em] mb-4">
                        System Architecture
                      </p>

                      <div className="space-y-2">
                        {project.systems.map((system) => (
                          <div
                            key={system.name}
                            className="flex items-center justify-between bg-white border border-black/10 rounded-2xl px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-black">
                                {system.number}
                              </span>

                              <span className="text-sm font-bold">
                                {system.name}
                              </span>
                            </div>

                            <span className="text-gray-300">
                              ↗
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-8 pt-7 border-t border-black/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 rounded-full bg-white border border-black/10 text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openProject(project)}
                      className="self-start lg:self-auto bg-neutral-950 text-white px-6 py-3.5 rounded-full font-bold hover:bg-orange-600 hover:-translate-y-1 transition duration-300 cursor-pointer"
                    >
                      Explore Complete Project →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PORTFOLIO STRIP */}
          <div className="mt-10 bg-neutral-950 text-white rounded-[2rem] px-7 py-6 lg:px-9 flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div>
              <p className="text-orange-500 text-xs font-black uppercase tracking-[0.17em]">
                03 — React Project
              </p>

              <h3 className="text-2xl font-black mt-1">
                Maria Developer Portfolio
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                The website you're currently exploring — built with React,
                Vite and Tailwind CSS.
              </p>
            </div>

            <div className="flex gap-2">
              {['React', 'Vite', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ==========================
          PROJECT CASE STUDY
      =========================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={closeProject}
        >
          <div
            className="min-h-screen bg-[#f8f6f1]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* TOP BAR */}
            <div className="sticky top-0 z-50 bg-[#f8f6f1]/95 backdrop-blur-xl border-b border-black/10">

              <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

                <div>
                  <p className="text-orange-600 text-[10px] md:text-xs font-black uppercase tracking-[0.18em]">
                    Project Case Study
                  </p>

                  <h3 className="text-lg md:text-xl font-black">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={closeProject}
                  className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center text-xl hover:bg-orange-600 transition cursor-pointer"
                >
                  ×
                </button>

              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">

              {/* CASE STUDY HERO */}
              <div>

                <p className="text-orange-600 font-black text-sm uppercase tracking-[0.18em]">
                  {selectedProject.subtitle}
                </p>

                <div className="grid lg:grid-cols-[1fr_0.7fr] gap-8 items-end mt-4 mb-8">

                  <h2 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                    {selectedProject.title}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {selectedProject.description}
                  </p>

                </div>

                <div className="rounded-[2rem] overflow-hidden border border-black/10 shadow-xl bg-white">
                  <img
                    src={selectedProject.showcase}
                    alt={selectedProject.title}
                    className="w-full"
                  />
                </div>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">

                  {selectedProject.highlights.map((item) => (
                    <div
                      key={item}
                      className="bg-white rounded-2xl border border-black/10 px-5 py-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-600 mb-3" />

                      <p className="font-bold text-sm">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </div>


              {/* SYSTEMS */}
              <div className="mt-20">

                <div className="mb-10">
                  <p className="text-orange-600 text-sm font-black uppercase tracking-[0.18em]">
                    Inside The Project
                  </p>

                  <h3 className="text-3xl md:text-5xl font-black tracking-[-0.04em] mt-3">
                    One project.
                    <br />
                    Multiple complete systems.
                  </h3>
                </div>

                <div className="space-y-20">

                  {selectedProject.systems.map((system) => (

                    <section key={system.name}>

                      {/* SYSTEM HEADER */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-7">

                        <div>

                          <p className="text-orange-600 text-xs font-black uppercase tracking-[0.17em]">
                            {system.number} — {system.type}
                          </p>

                          <h4 className="text-3xl md:text-4xl font-black mt-2">
                            {system.name}
                          </h4>

                        </div>

                        <p className="text-gray-600 leading-7 max-w-xl">
                          {system.description}
                        </p>

                      </div>


                      {/* PROFESSIONAL SHOWCASE IMAGE */}
                      <div className="rounded-[2rem] overflow-hidden border border-black/10 shadow-xl bg-white">

                        <img
                          src={system.showcase}
                          alt={`${system.name} showcase`}
                          className="w-full"
                        />

                      </div>


                      {/* FEATURES */}
                      <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-8 mt-8">

                        <div>

                          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.17em]">
                            Key Capabilities
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4">

                            {system.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-4 py-2.5 bg-white border border-black/10 rounded-full text-sm font-bold"
                              >
                                {feature}
                              </span>
                            ))}

                          </div>

                        </div>


                        {/* REAL SCREENSHOTS */}
                        <div>

                          <div className="flex items-center justify-between mb-4">

                            <p className="text-xs font-black text-gray-400 uppercase tracking-[0.17em]">
                              Real Interface Screens
                            </p>

                            <p className="text-xs text-gray-400">
                              Built project screenshots
                            </p>

                          </div>

                          <div
                            className={`grid gap-4 ${
                              system.screenshots.length === 1
                                ? 'grid-cols-1'
                                : 'sm:grid-cols-2'
                            }`}
                          >

                            {system.screenshots.map((screen) => (

                              <div
                                key={screen.image}
                                className="group bg-white rounded-2xl border border-black/10 overflow-hidden"
                              >

                                <div className="overflow-hidden bg-gray-100">

                                  <img
                                    src={screen.image}
                                    alt={screen.label}
                                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.02] transition duration-500"
                                  />

                                </div>

                                <p className="px-4 py-3 text-sm font-bold">
                                  {screen.label}
                                </p>

                              </div>

                            ))}

                          </div>

                        </div>

                      </div>

                    </section>

                  ))}

                </div>
              </div>


              {/* TECH STACK */}
              <div className="mt-20 bg-neutral-950 text-white rounded-[2rem] p-8 md:p-10">

                <p className="text-orange-500 text-xs font-black uppercase tracking-[0.17em]">
                  Technology Stack
                </p>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mt-4">

                  <h3 className="text-3xl md:text-4xl font-black">
                    Built with real-world
                    <br />
                    technologies.
                  </h3>

                  <div className="flex flex-wrap gap-2 lg:max-w-lg">

                    {selectedProject.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-4 py-2.5 bg-white/10 border border-white/10 rounded-full text-sm font-bold"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>


              {/* CLOSE */}
              <div className="text-center mt-12">

                <button
                  onClick={closeProject}
                  className="bg-black text-white px-7 py-4 rounded-full font-bold hover:bg-orange-600 transition cursor-pointer"
                >
                  ← Back to Portfolio
                </button>

              </div>

            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Projects