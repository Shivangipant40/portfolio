import React from 'react'

function Skills() {
   const skills = [
    {
      name: "HTML5",
      level: 90,
      color: "hsl(14, 90%, 53%)",
      icon: "🌐",
    },
    {
      name: "CSS3",
      level: 85,
      color: "hsl(207, 90%, 54%)",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      level: 80,
      color: "hsl(53, 93%, 54%)",
      icon: "⚡",
    },
    {
      name: "React.js",
      level: 75,
      color: "hsl(193, 95%, 68%)",
      icon: "⚛️",
    },
  ];
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-amber-300 font-medium mb-2">
            What I Know
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 sm:p-6 rounded-2xl bg-black border border-amber-500/30
                         hover:border-amber-400 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-200">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-base sm:text-lg font-semibold text-amber-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2.5 sm:h-3 bg-amber-950 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-amber-200 mb-6 text-lg">
            Also familiar with:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "VS Code",
              "Responsive Design",
              "Tailwind CSS",
              "Bootstrap",
              "Figma",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border text-sm
                           text-amber-200 border-amber-500/30
                           hover:bg-amber-300 hover:text-black
                           transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

    