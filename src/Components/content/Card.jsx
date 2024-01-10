import { contenido } from "../../assets/js/contenidoCards.js";
import '../../assets/css/card.css'

const Card = () => {
    return (
        <div>
            <ul>
                {contenido.map ((contenido, index) => (
                    <li
                        className={`row  justify-content-center align-items-center my-5 image-container`}
                        key={index}
                    >
                        <div className="row">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src={contenido.imagen}
                                    alt="Imagen 1"
                                    className="image"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 text-center px-5 my-3">
                            <div className="image-description">
                                <h3>{contenido.titulo}</h3>
                                <p>{contenido.txt}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card;