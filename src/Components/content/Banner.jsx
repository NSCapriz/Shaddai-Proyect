import { useState } from 'react'
import meditacion from '../../assets/img/meditación.jpg'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import '../../assets/css/banner.css'
import { useEffect } from 'react';

const Banner = () => {
    const [parrafoDinamico, setParrafoDinamico] = useState('');
    const frases = ['Todo lugar es Aquí...', 'Todo momento es Ahora!', 'Un espacio para vos...', 'Un espacio para sanar!'];
    const [contador, setContador] = useState (0);

    useEffect( ()=> {
        const interval = setInterval( ()=>{
            setContador( (currentValue) =>{
                if (currentValue + 1 === frases.length){
                    return 0;
                }
                return currentValue + 1;
            }); 
        }, 3000 );
        return () => clearInterval(interval);
    })

    return (
        <>
            <div className="particle-canvas">
                <div className="row align-items-center container-banner">
                    <div className="col-md-6">
                        <img src={meditacion} alt="mujer meditando" className='img-fluid d-flex ' />
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-center mt-5 ms-2'>Bienvenidos a Shaddai!</h1>
                        <SwitchTransition>
                            <CSSTransition classNames="fade" key={frases[contador]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                            <div className='frases ms-2'>{frases[contador]}</div>
                            </CSSTransition>
                        </SwitchTransition>
                        <p className='mt-4 ms-2'>Shaddai, es un espacio Holistico pensado para todas aquellas personas qe buscan armonía, conocimiento interior, desarrollo y crecimiento personal...</p>
                        <button className='btn btn-primary text-white fw-bolder mt-3 mb-5 ms-2'>Conocer más</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner