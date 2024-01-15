import { contenido } from "../../assets/js/contenidoCards.js";
import '../../assets/css/card.css'

const Card = () => {
    return (
        <div>
            <ul className="row justify-content-center align-items-center container-list ">
                {contenido.map((contenido, index) => (
                    <li
                        className="col-md-3 mx-2 px-3 my-4"
                        key={index}
                    >

                        <div className="text-center my-3 card-container">
                            <div className="card-front">
                                <div className="text-center d-flex justify-content-center align-items-center">
                                    <img
                                        src={contenido.imagen}
                                        alt={contenido.titulo}
                                        className="img-fluid card-image"
                                    />
                                </div>
                                <h3 className="text-center mt-5 pt-5 ">{contenido.titulo}</h3>
                            </div>
                            <div className="card-back pt-5 px-2">
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