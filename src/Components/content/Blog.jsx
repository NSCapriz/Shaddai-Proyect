import '../../assets/css/blog.css'
const Blog = () => {
  return (
    <>
    <div className="container-blog row justify-content-center align-items-center mt-5" id='blog'>
        <div className="col-md-8">
            <div className="d-flex justify-content-center aling-items-center">
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4'/>
                    <h2 className='text-center mt-5 mx-4'>Nuestro Blog</h2>
                <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4'/>
            </div>
                <p className='text-center mt-2 fs-5'>Descubrí un viaje hacia el bienestar en nuestro blog holístico! Sumérgite en experiencias transformadoras, contenido cautivador y conéctate con una comunidad dedicada al crecimiento y sanación personal.</p>
                <span><p className='text-center'>Seguinos en nuestro blog para compartir, conocer y explorar el camino hacia una vida más plena...</p></span>
                <div className="d-flex justify-content-center align-items-center">
                    <a  className="btn my-5 pb-3" href='https://shaddaiespacioholistico.blogspot.com/' target='_blank'>Ir al blog...</a>
                </div>
        </div>
    </div>
    </>
  )
}

export default Blog