import meditacion from '../../assets/img/meditación.jpg'
import '../../assets/css/banner.css'
import '../../assets/js/consoleText'

const Banner = () => {
    return (
        <>
            <div className="particle-canvas">
                <div className="row align-items-center container-banner">
                    <div className="col-md-6">
                        <img src={meditacion} alt="mujer meditando" className='img-fluid d-flex ' />
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-center mt-5'>Bienvenidos a Shaddai!</h1>
                        <p>Nuestro Espacio Holistico.</p>
                        <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner