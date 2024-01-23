import { useRef} from 'react'
import emailjs from '@emailjs/browser'
import '../../assets/css/contacto.css'
import Swal from 'sweetalert2'

const Contacto = () => {
    const refForm = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refForm.current);
        const serviceId = "service_fk5segs";
        const templateId = "remplate_9q0nr3i";

        const apikey = "oL4GPMILhAHykdxd5"
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( (result) => console.log(result.text))
        .catch( (error) => console.error(error))
    }
    
    const Enviar = () => {
        Swal.fire(" Enviado!");
        Swal.update({
            icon: 'success',
            text: '¡Gracias por contactarte con nosotros!'
        })
    };

  return (
    <>
        <div className="container-contacto row mt-5 px-5" id='contacto'>
            <div className="d-flex justify-content-center aling-items-center">
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
                <h2 className='text-center mt-5 mx-4'>Contacto</h2>
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <h3>¿Querés saber más?</h3>
                    <p> Si tenés alguna duda, queres saber más sobre alguno de nuestros servicios o queres adquirir alguno de ellos, podes hacerlo completando el siguiente formulario</p>
                    <span>
                        <p>¡ También recordá que podes escribirnos a través de algunas de nuestras redes sociales !</p>
                    </span>
                </div>
                <div className="col-md-6 container-formulario py-5 ">
                <form ref={refForm} action="" onSubmit={handleSubmit}>
                    <div>
                        <h3 className='text-center'>Consultas</h3>
                        <p className='text-center'>Por favor, para realizar alguna consulta completá el formulario...</p>
                        <fieldset  className='my-3'>
                            <label htmlFor="username" className='d-flex justify-content-center'>Nombre:</label>
                            <div className='d-flex justify-content-center'>
                                <input name='username' type="text" placeholder='Ingrese su nombre...' required />
                            </div>
                        </fieldset>
                        <fieldset className='my-3'>
                            <label htmlFor="email" className='d-flex justify-content-center'>Email</label>
                            <div className='d-flex justify-content-center'>
                                <input name='email' type="email" placeholder='Ingrese su Email' id='email' required/>
                            </div>
                        </fieldset>
                        <fieldset className='my-3'>
                            <label htmlFor="telephone" className='d-flex justify-content-center'>Telefono de contacto:</label>
                            <div className='d-flex justify-content-center'>
                                <input type="number" placeholder='Ingrese un número de contacto...' name='telephone'/>
                            </div>
                        </fieldset>
                        <fieldset className='my-3'>
                            <label htmlFor="message" className='d-flex justify-content-center'>Consulta:</label>
                            <div className='d-flex  justify-content-center'>
                            <textarea name="message" maxLength='500' id="message" cols="30" rows="10" placeholder='Escriba su consulta...' required></textarea>
                            </div>
                        </fieldset>
                    </div>
                    <div className='d-flex justify-content-center mt-3 pb-3'>
                    <button className='btn fw-bolder' type='submit' onClick={Enviar}>Enviar</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacto