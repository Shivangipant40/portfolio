import React from 'react'

function Projects() {

  const projects = [
     {
        heading:"Todo-App",
        content:"A task management application that allows users to add, edit, and delete tasks efficiently.",
        github:"https://github.com/Shivangipant40/weather-app.git",
        live:"",
     },{
        heading:"Weather-App",
        content:"A weather application that displays real-time temperature, minimum and maximum temperature, and wind speed Uses a public weather API to fetch and present accurate location-based weather data",
        github:"https://github.com/Shivangipant40/weather-app.git",
         live:"",
     },{
        heading: "Ai Mock-Interview-App",
        content: "An AI-powered mock interview platform that simulates real interview questions and evaluates user responses. Designed to help candidates improve communication skills through instant feedback and practice sessions.",
        github:"https://github.com/Shivangipant40/ai-mock-interview-app.git",
        live:"",
     },
  ]
  return (
      <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-200 text-center">
          Featured Projects
        </h1>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {projects.map((project) => (
            <div
              key={project.heading}
              className="w-full sm:w-88 bg-amber-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {project.heading}
              </h2>

              <p className="text-slate-700 mt-3 text-sm leading-relaxed">
                {project.content}
              </p>

              {/* Buttons */}
              <div className="flex justify-between mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 text-sm rounded bg-amber-400 text-black hover:bg-amber-300 transition"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;