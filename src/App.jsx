import { useState } from 'react'
import './App.css'
import Navbar from './Components/Global/Navbar'
import Banner from './Components/content/Banner'
import QueSomos from './Components/content/QueSomos'
import Servicios from './Components/content/Servicios'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <QueSomos/>
      <Servicios/>
    </>
  )
}

export default App
