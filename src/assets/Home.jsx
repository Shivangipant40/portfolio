import React from 'react'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import { Link } from "react-router-dom";

function Home() {
  return (
    
    <section
      
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-200">
        Hi, I'm Shivangi Pant
      </h1>

      {/* Subtitle */}
      <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-amber-500">
        Frontend Developer crafting beautiful web experiences
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-6 justify-center">
      <Link to="/project"
       className='w-full sm:w-32 h-12 rounded-2xl bg-amber-300 font-semibold tracking-wide flex items-center justify-center
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg'> Explore Work</Link>
        
        <a href="#contact"
          className="w-full sm:w-32 h-12 rounded-2xl bg-amber-300 font-semibold tracking-wide flex items-center justify-center
                     transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          Get In Touch
        </a>
        </div>
    
    </section>
  
  )
}

export default Home