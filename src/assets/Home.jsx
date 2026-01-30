import React from 'react';
import { Link } from "react-router-dom";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Elements - Using your Amber shades with low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Greeting */}
          <p className="text-amber-200 font-medium mb-4 tracking-widest uppercase text-sm">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-200">
            Shivangi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Pant</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-amber-500/80 mb-8 font-light">
            <span className="text-amber-500 font-semibold">Frontend Developer</span> crafting
            beautiful web experiences
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link 
              to="/project"
              className="px-8 py-3 rounded-full bg-amber-300 text-black font-bold transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(252,211,77,0.4)] flex items-center justify-center"
            >
              Explore My Work
            </Link>
            
            <a 
              href="#contact"
              className="px-8 py-3 rounded-full border border-amber-300 text-amber-300 font-bold transition-all hover:bg-amber-300/10 hover:scale-105 flex items-center justify-center"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500/60 hover:text-amber-200 transition-colors duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500/60 hover:text-amber-200 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:shivangipant07@gmail.com"
              className="text-amber-500/60 hover:text-amber-200 transition-colors duration-300"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-amber-500/50 hover:text-amber-200 transition-colors">
            <ArrowDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;