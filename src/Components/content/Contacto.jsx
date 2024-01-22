import { useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contacto = () => {
    const refForm = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refForm.current);
        const serviceId = "service_fk5segs";
        const templateId = "remplate_9q0nr3i";

        const apikey = "oL4GPMILhAHykdxd5"
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error))
    }
    

  return (
    <>
        <div className="container-contacto row mt-5 px-5" id='contacto'>
            <div className="d-flex justify-content-center aling-items-center">
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
                <h2 className='text-center mt-5 mx-4'>Contacto</h2>
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                    <h3>¿Querés saber más?</h3>
                    <p> Si tenés alguna duda, queres saber más sobre alguno de nuestros servicios o queres adquirir alguno de ellos, podes hacerlo completando el siguiente formulario</p>
                    <p>¡ También recordá que podes escribirnos a través de algunas de nuestras redes sociales !</p>
                </div>
                <div className="col-md-7">
                <form ref={refForm} action="" onSubmit={handleSubmit}>
                    <div>
                        <h2 className='text-center'>Consulta</h2>
                        <p>Por favor, para realizar alguna consulta completá el formulario</p>
                        <fieldset>
                            <label htmlFor="username">Nombre:</label>
                            <input name='username' type="text" placeholder='Ingrese su nombre...' required/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input name='email' type="email" placeholder='Ingrese su Email' id='email' required/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="telephone">Telefono de contacto:</label>
                            <input type="number" placeholder='Ingrese un número de contacto...' name='telephone'/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="message">Consulta:</label>
                            <textarea name="message" maxLength='500' id="message" cols="30" rows="10" placeholder='Escriba su consulta...' required></textarea>
                        </fieldset>
                    </div>
                    <button className='btn btn-warning'>Enviar</button>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacto