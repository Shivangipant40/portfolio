import React from 'react'
import { Mail, MapPin, Phone, } from "lucide-react";

function Contact() {
  
  
  return (
    <>
    <div className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-12">

    {/*LEFT SIDE */}
    <div className="space-y-6">
      <p className="text-amber-400 text-lg">
        I'm always interested in hearing about new projects and opportunities.
        Feel free to reach out if you'd like to work together!
      </p>

      {/* Email */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-black border border-amber-500/30">
        <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-amber-400 text-black">
          ✉️
        </div>
        <div>
          <p className="text-amber-300 font-semibold">Email</p>
          <p className="text-amber-200 text-sm">shivangi.pant@email.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-black border border-amber-500/30">
        <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-amber-400 text-black">
          📞
        </div>
        <div>
          <p className="text-amber-300 font-semibold">Phone</p>
          <p className="text-amber-200 text-sm">+91 XXXXX XXXXX</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-black border border-amber-500/30">
        <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-amber-400 text-black">
          📍
        </div>
        <div>
          <p className="text-amber-300 font-semibold">Location</p>
          <p className="text-amber-200 text-sm">India</p>
        </div>
      </div>
    </div>

    {/*RIGHT SIDE (FORM)  */}
    <div className="bg-black border border-amber-500/30 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-amber-200 mb-1">
        Send a Message
      </h3>
      <p className="text-amber-400/80 mb-6 text-sm">
        Fill out the form and I'll get back to you soon
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-black
                     border border-amber-500/30
                     text-amber-200 placeholder-amber-400/60
                     focus:outline-none focus:border-amber-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-black
                     border border-amber-500/30
                     text-amber-200 placeholder-amber-400/60
                     focus:outline-none focus:border-amber-400"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-black
                     border border-amber-500/30
                     text-amber-200 placeholder-amber-400/60
                     focus:outline-none focus:border-amber-400 resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-amber-400 text-black
                     font-semibold hover:scale-[1.02]
                     transition-transform duration-300"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>
</div>

   
   
   
              
    </>
  )
}

export default Contact