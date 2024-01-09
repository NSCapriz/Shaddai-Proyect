import { useState } from 'react'
import './App.css'
import Navbar from './Components/Global/Navbar'
import Banner from './Components/content/Banner'
import QueSomos from './Components/content/QueSomos'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <QueSomos/>
    </>
  )
}

export default App
