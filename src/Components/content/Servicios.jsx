import  '../../assets/css/servicios.css'
import Card from './Card'

const Servicios = () => {
  return (
    <>
        <div className="container-servicios mt-5 px-5">
            <div className="d-flex justify-content-center aling-items-center">
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4'/>
                    <h2 className='text-center mt-5 mx-4'>Nuestros Servicios</h2>
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4'/>
            </div>
            <div className="row justify-content-center aling-items-center">
                <Card/>
            </div>
        </div>
    </>
  )
}

export default Servicios