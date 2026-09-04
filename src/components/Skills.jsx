function Skills() {
  const skillGroups = [
    {
      title: 'Web Development',
      description: 'Building complete web applications from frontend to backend.',
      skills: ['Laravel', 'PHP', 'React', 'Tailwind CSS', 'MySQL'],
    },
    {
      title: 'Mobile Development',
      description: 'Creating Android and cross-platform mobile applications.',
      skills: ['Kotlin', 'Flutter', 'Dart', 'Firebase'],
    },
    {
      title: 'Backend & APIs',
      description: 'Working with databases, authentication and API-based systems.',
      skills: ['MySQL', 'Firebase', 'REST APIs', 'PHP'],
    },
    {
      title: 'AI & Integrations',
      description: 'Adding practical AI capabilities to real-world applications.',
      skills: ['AI APIs', 'Groq', 'AI Recommendations', 'Chat Assistants'],
    },
  ]

  return (
    <section id="skills" className="py-28 px-6 lg:px-10 bg-[#f8f6f1]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-5">
            Skills & Technologies
          </p>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Tools I use to turn
            <br />
            <span className="text-orange-600">ideas into products.</span>
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            My skills cover the full development process — from designing
            interfaces and building APIs to managing databases and integrating
            AI-powered features.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="bg-white rounded-3xl p-8 border border-black/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >

              <div className="flex items-center justify-between mb-5">
                <span className="text-orange-600 font-black text-sm">
                  0{index + 1}
                </span>

                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  +
                </div>
              </div>

              <h3 className="text-2xl font-black">
                {group.title}
              </h3>

              <p className="text-gray-500 leading-7 mt-3">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-100 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills