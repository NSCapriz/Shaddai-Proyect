import { useState } from 'react'
import logo from '../../assets/img/Logo-Shaddai.jpeg'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import '../../assets/css/banner.css'
import { useEffect } from 'react';

const Banner = () => {
    const [parrafoDinamico, setParrafoDinamico] = useState('');
    const frases = ['Todo lugar es Aquí...', 'Todo momento es Ahora!', 'Un espacio para vos...', 'Un espacio para sanar!'];
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setContador((currentValue) => {
                if (currentValue + 1 === frases.length) {
                    return 0;
                }
                return currentValue + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    })

    return (
        <>
            <div className="particle-canvas mt-5">
                <div className="row align-items-center justify container-banner">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={logo} alt="logo shaddai" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex juystify-content-center align-items-center">
                            <h1 className='text-center mt-5 px-2'>Bienvenidos a Shaddai!</h1>
                        </div>
                        <SwitchTransition>
                            <CSSTransition classNames="fade" key={frases[contador]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                                <div className='frases px-2'>{frases[contador]}</div>
                            </CSSTransition>
                        </SwitchTransition>
                        <p className='mt-5 px-3'>Shaddai, es un espacio Holistico pensado para todas aquellas personas qe buscan armonía, conocimiento interior, desarrollo y crecimiento personal...</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <button className='btn btn-success text-white fw-bolder mt-4 mb-5 px-2'>Conocer más</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner