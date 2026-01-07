import React from 'react'
import { FaCode } from "react-icons/fa6";
import { LuSparkles } from "react-icons/lu";
import { FaBoltLightning } from "react-icons/fa6";


function About() {

 const cardContent =[
  { 
    title:"Clean Code", 
    content: "Writing maintainable and scalable code",
    icon:<FaCode />
  },
  
  { 
    title:"Creative Design", 
    content: "Crafting visually appealing interfaces",
    icon:<LuSparkles />
  },
  { 
    title:"Fast Learner", 
    content: "Quick to adapt to new technologies",
    icon:<FaBoltLightning />

  }
]
  
  return (
    <section 
     className=" min-h-screen flex flex-col items-center justify-center py-16 sm:px-6 lg:px-8">
     <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:6xl text-amber-200">
    ABOUT ME
     </h2>
     
      {/* Main layout */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Creative card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="aspect-square relative">

            <div className="absolute inset-0 rounded-3xl rotate-6 opacity-30 
              bg-linear-to-br from-orange-500 via-orange-400 to-amber-300 blur-sm" />

            <div className="absolute inset-0 rounded-3xl overflow-hidden border">
              <div className="w-full h-full flex items-center justify-center 
                bg-linear-to-br from-orange-950 via-orange-900 to-black">

                <div className="text-center p-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full 
                    bg-linear-to-br from-orange-400 to-amber-300 
                    flex items-center justify-center
                    shadow-[0_0_30px_rgba(251,146,60,0.6)]
                    transition-transform duration-300 hover:scale-105">

                    <span className="text-3xl sm:text-4xl font-bold text-white">SP</span>
                  </div>

                  <p className="text-xl font-semibold text-white">Shivangi Pant</p>
                  <p className="text-orange-400/80 text-sm sm:text-base">
                    Frontend Developer
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-5 text-white">
          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Hi there! I'm <span className="text-foreground font-medium">Shivangi Pant</span>,
            a passionate frontend developer at the beginning of my exciting journey
            in web development. I love turning ideas into beautiful, functional websites.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            As a fresher, I bring fresh perspectives, enthusiasm, and a strong
            foundation in modern web technologies. I'm constantly learning and
            improving my skills to stay up-to-date.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            My goal is to create web experiences that are visually stunning,
            intuitive, and accessible to all users.
          </p>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardContent.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-amber-200 text-black text-center
                           transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;


