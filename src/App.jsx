import { useState } from 'react'
import './App.css'
import Navbar from './Components/Global/Navbar'
import Banner from './Components/content/Banner'
import QueSomos from './Components/content/QueSomos'
import Servicios from './Components/content/Servicios'
import MetodosPago from './Components/content/MetodosPago'
import Footer from './Components/Global/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <QueSomos/>
      <Servicios/>
      <MetodosPago/>
      <Footer/>
    </>
  )
}

export default App
