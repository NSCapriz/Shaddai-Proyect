import '../../assets/css/blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
const Blog = () => {
    return (
        <>
            <div className="container-blog row justify-content-center align-items-center mt-5" id='blog'>
                <div className="col-md-8">
                    <div className="d-flex justify-content-center aling-items-center">
                        <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
                        <h2 className='text-center mt-5 mx-4'>Nuestro Blog</h2>
                        <img width="62" height="62" src="https://img.icons8.com/external-rabit-jes-outline-color-rabit-jes/62/external-spa-hotel-rabit-jes-outline-color-rabit-jes.png" alt="external-spa-hotel-rabit-jes-outline-color-rabit-jes" className='img-fluid mt-4' />
                    </div>
                    <p className='text-center mt-2 fs-5'>Descubrí un viaje hacia el bienestar en nuestro blog holístico! Explorá las experiencias transformadoras, contenido cautivador y conéctate con una comunidad dedicada al crecimiento y sanación personal.</p>
                    <span><p className='text-center'>Seguinos en nuestro blog para compartir, conocer y explorar el camino hacia una vida más plena...</p></span>
                    <div className="d-flex justify-content-center align-items-center">
                        <a className="btn my-5 pb-3" href='https://shaddaiespacioholistico.blogspot.com/' target='_blank'>Ir al blog...</a>
                    </div>
                </div>
                <div className="container-novedades row justify-content-center align-items-center mt-3 mb-5  py-4 pb-3">
                    <div className="col-md-5">
                        <h3>¡¡ Novedades !!</h3>
                        <p>
                            Enterate minuto a minuto de todas las novedades que publicamos en nuestras redes sociales.
                        </p>
                        <p>
                            Para que no puedas perderte de nada, te invitamos a que nos sigas en todas nuestras redes.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <Container>
                            <div class="ratio ratio-1x1">
                                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSHADDAIESPACIOHOLISTICO&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" className='img-fluid' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog