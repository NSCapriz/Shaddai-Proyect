import { contenido } from "../../assets/js/contenidoCards.js";
import '../../assets/css/card.css'

const Card = () => {
    return (
        <div>
            <ul className="row justify-content-center align-items-center container-list">
                {contenido.map((contenido, index) => (
                    <li
                        className={`col-md-3 mx-2 px-5 my-5`}
                        key={index}
                    >

                        <div className="text-center my-3">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src={contenido.imagen}
                                    alt="Imagen 1"
                                    className="image"
                                />
                            </div>
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