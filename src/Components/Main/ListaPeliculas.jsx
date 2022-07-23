import React, { useState, useEffect } from "react";
import "../Main/ListaPeliculas.css";
// const imagesLista = require.context("../../assets/img-listaPeliculas", true);
import Loader from "../../Loader/Loader";
import images from "../../exports/images";
import { motion } from "framer-motion";
const ListaPeliculas = () => {
  // const [isLoader, setIsLoader] = useState(false)
  // const loaderTrue = ()=>{
  // }
  // const [image, setImage] = useState("");
  const getData = () => {
    fetch("http://localhost:8080/imagenes")
      .then((response) => response.json)
      .then((response) => {
        console.log(response);
        
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="imagenesDestacadas">
        <div
          id="indicadoresDestacada"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="0"
              className="active bg-primary bg-gradient"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="bg-primary bg-gradient"
            ></button>
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="bg-primary bg-gradient"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="pelicula-destacada pelicula1">
                <div className="container">
                  <h3 className="titulo">
                    The Batman
                    <span className="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p className="description">
                    Cuando un asesino se dirige a la élite de Gotham con una
                    serie de maquinaciones sádicas, un rastro de pistas
                    crípticas envía Batman a una investigación en los bajos
                    fondos. A medida que las pruebas comienzan a acercarse a su
                    casa y se hace evidente la magnitud de los planes del autor,
                    Batman debe forjar nuevas relaciones, desenmascarar al
                    culpable y hacer justicia al abuso de poder y la corrupción
                    que durante mucho tiempo han asolado Gotham City.
                  </p>
                  <button type="button" className="btn boton">
                    <i className="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="pelicula-destacada pelicula2">
                <div className="container">
                  <h3 className="titulo">
                    Uncharted
                    <span className="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p className="description">
                    Un descendiente del explorador Sir Francis Drake descubre la
                    ubicación de la legendaria ciudad de El Dorado. Con la ayuda
                    de su mentor Victor Sullivan y la ambiciosa periodista Elena
                    Fischer, Nathan Drake trabajará para descubrir sus secretos,
                    mientras sobreviven en una isla llena de piratas,
                    mercenarios, y un misterioso enemigo, se embarcarán en una
                    búsqueda sin precedentes por alcanzar el tesoro antes que
                    sus perseguidores. Adaptación del aclamado videojuego
                    homónimo.
                  </p>
                  <button type="button" className="btn boton">
                    <i className="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="pelicula-destacada pelicula3">
                <div className="container">
                  <h3 className="titulo">
                    Spider-Man: No Way Home
                    <span className="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p className="description">
                    Peter Parker es desenmascarado y por tanto no es capaz de
                    separar su vida normal de los enormes riesgos que conlleva
                    ser un súper héroe. Cuando pide ayuda a Doctor Strange, los
                    riesgos pasan a ser aún más peligrosos, obligándole a
                    descubrir lo que realmente significa ser Spider-Man.
                  </p>
                  <button type="button" className="btn boton">
                    <i className="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="titulo-controles">
        <h3>Populares</h3>
      </div>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -4800 }}
        >
          {images.map((image) => (
            <motion.div className="item">
              <a href="/">
                <img src={image} alt="" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="titulo-controles">
        <h3>Populares</h3>
      </div>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -4800 }}
        >
          {images.map((image) => (
            <motion.div className="item">
              <a href="/">
                <img src={image} alt="" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="titulo-controles">
        <h3>Populares</h3>
      </div>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -4800 }}
        >
          {images.map((image) => (
            <motion.div className="item">
              <a href="/">
                <img src={image} alt="" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="titulo-controles">
        <h3>Populares</h3>
      </div>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -4800 }}
        >
          {images.map((image) => (
            <motion.div className="item">
              <a href="/">
                <img src={image} alt="" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
export default ListaPeliculas;
