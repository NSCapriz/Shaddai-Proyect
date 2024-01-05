import meditacion from '../../assets/img/meditación.jpg'
import '../../assets/css/banner.css'

const Banner = () => {
    return (
        <div className="row align-items-center container-banner">
            <div className="col-md-6">
                <img src={meditacion} alt="mujer meditando" className='img-fluid d-flex ' />
            </div>
        </div>
    )
}

export default Banner