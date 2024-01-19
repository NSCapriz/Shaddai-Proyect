import '../../assets/css/servicios.css'
import Card from '../context/Card'

const Servicios = () => {
    return (
        <>
            <div className="container-servicios row mt-5 px-5" id='servicios'>
                <div className="d-flex justify-content-center aling-items-center">
                    <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
                    <h2 className='text-center mt-5 mx-4'>Nuestros Servicios</h2>
                    <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p className="text-center my-2 mt-4 fs-5">Descubre la armonía en nuestro espacio holístico, donde nuestras terapias se entrelazan para renovar tu bienestar físico y emocional.</p>
                        <p className="text-center my-3 fs-5">Sumérgete en una experiencia única de relajación y equilibrio.</p>
                        <p className="text-center my-2 fs-4 fw-bolder frase">¡Déjanos guiar tu viaje hacia la serenidad y la vitalidad!</p>
                    </div>
                </div>
                <div className="row justify-content-center aling-items-center">
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Servicios