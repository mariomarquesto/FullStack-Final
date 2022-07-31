import React from "react";
import { default as imagen1 } from "../../assets/mujer_maravilla.jpg";
import { default as imagen2 } from "../../assets/thor.jpg";
import { default as imagen3 } from "../../assets/ecos_de_un_crimen.jpg";
import { useNavigate } from "react-router-dom";
import "./styleCarrousel.css";

const Carrousel = () => {
    const navigate = useNavigate();

    const navegarReproductorVideo = () => {
        navigate({
            pathname: "reproductor-video",
        });
    };

    return (
        <div>
            <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img
                            src={imagen1}
                            className="d-block w-100"
                            height={"610px"}
                            alt="MUJER"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Mujer Maravilla</h1>
                            <p>
                                Wonder Woman, es la primera película de una posible trilogía y
                                también es la primera de superhéroes de DC Comics y Warner Bros
                                protagonizada por una mujer que cuenta con un gran presupuesto.
                            </p>
                            <button
                                onClick={navegarReproductorVideo}
                                type="button"
                                class="btn btn-primary"
                            >
                                <samp></samp>
                                <samp></samp>
                                <samp></samp>
                                <samp></samp>
                                VER
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src={imagen2}
                            className="d-block w-100"
                            height={"610px"}
                            alt="THOR"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Thor</h1>
                            <p>
                                La épica aventura de "Thor" traslada el Universo Marvel desde la Tierra en el presente hasta el reino místico de Asgard. En el centro de la historia está el Poderoso Thor, un poderoso pero arrogante guerrero cuyos imprudentes actos reavivan una antigua guerra. Como consecuencia, Thor es castigado a ser enviado a la Tierra, donde se ve obligado a vivir entre humanos. Cuando el villano más peligroso de su mundo envía a las fuerzas más oscuras de Asgard, Thor aprende lo que hace falta para ser un verdadero héroe.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={imagen3}
                            className="d-block w-100"
                            height={"610px"}
                            alt="ECOS"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Ecos de un Crímen</h1>
                            <p>
                                Julián Lemar, un escritor de best-sellers de suspenso, se va de vacaciones con su familia a una cabaña en un bosque. La primera noche, durante una fuerte tormenta, se corta la luz y una mujer se presenta pidiendo ayuda desesperada: su marido mató a su hijo y ahora quiere acabar con ella. A partir de ese momento, el peligro y el engaño son una amenaza constante y para Julián comienza una noche infernal hasta descubrir la verdad.
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carrousel;
