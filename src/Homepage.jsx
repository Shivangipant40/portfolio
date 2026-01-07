import React from 'react'
import Home from './assets/Home'
import About from './assets/About'
import Skills from './assets/Skills'
import Contact from './assets/Contact'
import Projects from './assets/Projects'

function Homepage() {
  return (

    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="project"><Projects/></section>
      <section id="projects"><Skills /></section> 
      <section id="contact"><Contact /></section>
     
  </>
  )
}

export default Homepage