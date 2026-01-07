import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './assets/Home'
import {Routes, Route} from 'react-router-dom'
import Contact from './assets/Contact'
import Homepage from './Homepage'



function App() {
  

  return (
    <>
      
    <Navbar/>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path='/contact' element= {<Contact/>}/>
    
    </Routes> 

    </>
  )
}

export default App
