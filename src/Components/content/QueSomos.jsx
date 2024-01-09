import '../../assets/css/quesomos.css'
import frase from '../../assets/img/frase-socrates.jfif'

const QueSomos = () => {
  return (
    <>
        <div className="container-queSomos mt-5 row justify-content-center align-items-center px-2">
            <div className="col-md-6">
                <h2 className='text-center my-3'>¿Que somos?</h2>
                <p className='text-center'>Descubre un oasis de bienestar en nuestro espacio holístico, donde la espiritualidad se entrelaza con la salud emocional. Te invitamos a explorar un camino hacia la paz mental y el equilibrio emocional. Conecta contigo mismo y experimenta una transformación profunda.</p>
                <p className='mt-3 text-center px-4 fw-bolder'><span>¡Tu viaje hacia una vida más plena comienza aquí!</span></p>
            </div>
            <div className="col-md-3">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={frase} alt="frase" className='img-fluid' />
                </div>
            </div>
        </div>
    </>
  )
}

export default QueSomos