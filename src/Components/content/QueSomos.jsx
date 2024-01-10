import '../../assets/css/quesomos.css'
import frase from '../../assets/img/frase-socrates.jfif'

const QueSomos = () => {
  return (
    <>
        <div className="container-queSomos mt-5 row justify-content-center align-items-center px-2">
            <div className="col-md-8">
                <div className="d-flex justify-content-center aling-items-center">
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4'/>
                    <h2 className='text-center mt-5 mx-4'>¿Que somos?</h2>
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4'/>
                </div>
                <p className='text-center mt-3'>Somos un oasis de bienestar!</p>
                <p className='text-center'>En nuestro espacio holístico, la espiritualidad se entrelaza con la salud emocional.</p>
                <p className='text-center'>Te invitamos a explorar un camino hacia la paz mental y el equilibrio emocional. Conecta con vos mismo, y experimenta una transformación profunda.</p>
                <p className='mt-4 text-center px-4 fw-bolder'><span>¡Tu viaje hacia una vida más plena comienza aquí!</span></p>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={frase} alt="frase" className='img-fluid' />
                </div>
            </div>
        </div>
    </>
  )
}

export default QueSomos