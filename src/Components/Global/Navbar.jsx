import React from 'react'
import { useState } from 'react'
import logo from '../../assets/img/Logo-Shaddai.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/navbar.css'
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="row">
        <div className="container-navbar d-flex justify-content-between px-3 py-2">
          <div className='d-flex justify-content-start'>
            <a href="#inicio">
              <img src={logo} alt="Shaddai" className='me-3 img-fluid' />
            </a>
            <p className='fs-3 d-flex align-items-center'>Shaddai</p>
          </div>
          < div className={`container_navbar--links ${menu ? 'open' : ''}`}>
            <button onClick={toggleMenu} >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
            <ul className={`nav-list ${menu ? 'show' : ''}`}>
              <li ><a href='#inicio'>Inicio</a></li>
              <li ><a href='#queSomos'>¿Qué somos?</a></li>
              <li ><a href='#servicios'>Servicios</a></li>
              <li ><a href='https://shaddaiespacioholistico.blogspot.com/' target='_blank'>Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar