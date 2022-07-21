import React from "react";
import "../Main/ListaPeliculas.css";
const ListaPeliculas = () => {
  // const fila1 = document.querySelector(".contenedorJs1");
  // const fila2 = document.querySelector(".contenedorJs2");
  // const fila3 = document.querySelector(".contenedorJs3");
  // const fila4 = document.querySelector(".contenedorJs4");
  // const peliculasFila1 = document.querySelectorAll(".peliculaFila1");
  // const peliculasFila2 = document.querySelectorAll(".peliculaFila2");
  // const peliculasFila3 = document.querySelectorAll(".peliculaFila3");
  // const peliculasFila4 = document.querySelectorAll(".peliculaFila4");

  // // ----------EVENTO PARA LA FLECHA DERECHA-------------//
  // const botonDerecha1 = (id) => {
  //   const flechaDerecha1 = document.getElementById(id);
  //   fila1.scrollLeft += fila1.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores1 .active"
  //   );
  //   if (indicadorActivo.nextSibling) {
  //     indicadorActivo.nextSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };
  // const botonDerecha2 = (id) => {
  //   const flechaDerecha2 = document.getElementById(id);
  //   fila2.scrollLeft += fila2.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores2 .active"
  //   );
  //   if (indicadorActivo.nextSibling) {
  //     indicadorActivo.nextSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };
  // const botonDerecha3 = (id) => {
  //   const flechaDerecha3 = document.getElementById(id);
  //   fila3.scrollLeft += fila3.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores3 .active"
  //   );
  //   if (indicadorActivo.nextSibling) {
  //     indicadorActivo.nextSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };
  // const botonDerecha4 = (id) => {
  //   const flechaDerecha4 = document.getElementById(id);
  //   fila4.scrollLeft += fila4.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores4 .active"
  //   );
  //   if (indicadorActivo.nextSibling) {
  //     indicadorActivo.nextSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };

  // // ----------EVENTO PARA LA FLECHA IZQUIERDA-------------//
  // const botonIzquierda1 = (id) => {
  //   const flechaIzquierda1 = document.getElementById(id);
  //   fila1.scrollLeft -= fila1.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores1 .active"
  //   );
  //   if (indicadorActivo.previousSibling) {
  //     indicadorActivo.previousSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };
  // const botonIzquierda2 = (id) => {
  //   const flechaIzquierda2 = document.getElementById(id);
  //   fila2.scrollLeft -= fila2.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores2 .active"
  //   );
  //   if (indicadorActivo.previousSibling) {
  //     indicadorActivo.previousSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };
  // const botonIzquierda3 = (id) => {
  //   const flechaIzquierda3 = document.getElementById(id);
  //   fila3.scrollLeft -= fila3.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores3 .active"
  //   );
  //   if (indicadorActivo.previousSibling) {
  //     indicadorActivo.previousSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };
  // const botonIzquierda4 = (id) => {
  //   const flechaIzquierda4 = document.getElementById(id);
  //   fila4.scrollLeft -= fila4.offsetWidth;
  //   console.log(id);
  //   const indicadorActivo = document.querySelector(
  //     ".containerIndicadores4 .active"
  //   );
  //   if (indicadorActivo.previousSibling) {
  //     indicadorActivo.previousSibling.classList.add("active");
  //     indicadorActivo.classList.remove("active");
  //   }
  // };

  // //----------------INDICADORES------------------------
  // const numeroIndicadoresFila1 = Math.ceil(peliculasFila1.length / 5);
  // const numeroIndicadoresFila2 = Math.ceil(peliculasFila2.length / 5);
  // const numeroIndicadoresFila3 = Math.ceil(peliculasFila3.length / 5);
  // const numeroIndicadoresFila4 = Math.ceil(peliculasFila4.length / 5);
  // for (let i = 0; i < numeroIndicadoresFila1; i++) {
  //   const indicador = document.createElement("button");
  //   if (i === 0) {
  //     indicador.classList.add("active");
  //   }
  //   document.querySelector(".containerIndicadores1").appendChild(indicador);
  //   indicador.addEventListener("click", (e) => {
  //     fila1.scrollLeft = i * fila1.offsetWidth;
  //     document
  //       .querySelector(".containerIndicadores1 .active")
  //       .classList.remove("active");
  //     e.target.classList.add("active");
  //   });
  // }
  // for (let i = 0; i < numeroIndicadoresFila2; i++) {
  //   const indicador = document.createElement("button");
  //   if (i === 0) {
  //     indicador.classList.add("active");
  //   }
  //   document.querySelector(".containerIndicadores2").appendChild(indicador);
  //   indicador.addEventListener("click", (e) => {
  //     fila2.scrollLeft = i * fila2.offsetWidth;
  //     document
  //       .querySelector(".containerIndicadores2 .active")
  //       .classList.remove("active");
  //     e.target.classList.add("active");
  //   });
  // }
  // for (let i = 0; i < numeroIndicadoresFila3; i++) {
  //   const indicador = document.createElement("button");
  //   if (i === 0) {
  //     indicador.classList.add("active");
  //   }
  //   document.querySelector(".containerIndicadores3").appendChild(indicador);
  //   indicador.addEventListener("click", (e) => {
  //     fila3.scrollLeft = i * fila3.offsetWidth;
  //     document
  //       .querySelector(".containerIndicadores3 .active")
  //       .classList.remove("active");
  //     e.target.classList.add("active");
  //   });
  // }
  // for (let i = 0; i < numeroIndicadoresFila4; i++) {
  //   const indicador = document.createElement("button");
  //   if (i === 0) {
  //     indicador.classList.add("active");
  //   }
  //   document.querySelector(".containerIndicadores4").appendChild(indicador);
  //   indicador.addEventListener("click", (e) => {
  //     fila4.scrollLeft = i * fila4.offsetWidth;
  //     document
  //       .querySelector(".containerIndicadores4 .active")
  //       .classList.remove("active");
  //     e.target.classList.add("active");
  //   });
  // }

  // // --------------HOVER PELICULAS----------------------
  // peliculasFila1.forEach((pelicula) => {
  //   pelicula.addEventListener("mouseenter", (e) => {
  //     const elemento = e.currentTarget;
  //     setTimeout(() => {
  //       peliculasFila1.forEach((pelicula) =>
  //         pelicula.classList.remove("hover")
  //       );
  //       elemento.classList.add("hover");
  //     }, 300);
  //   });
  // });
  // peliculasFila2.forEach((pelicula) => {
  //   pelicula.addEventListener("mouseenter", (e) => {
  //     const elemento = e.currentTarget;
  //     setTimeout(() => {
  //       peliculasFila2.forEach((pelicula) =>
  //         pelicula.classList.remove("hover")
  //       );
  //       elemento.classList.add("hover");
  //     }, 300);
  //   });
  // });
  // peliculasFila3.forEach((pelicula) => {
  //   pelicula.addEventListener("mouseenter", (e) => {
  //     const elemento = e.currentTarget;
  //     setTimeout(() => {
  //       peliculasFila3.forEach((pelicula) =>
  //         pelicula.classList.remove("hover")
  //       );
  //       elemento.classList.add("hover");
  //     }, 300);
  //   });
  // });
  // peliculasFila4.forEach((pelicula) => {
  //   pelicula.addEventListener("mouseenter", (e) => {
  //     const elemento = e.currentTarget;
  //     setTimeout(() => {
  //       peliculasFila4.forEach((pelicula) =>
  //         pelicula.classList.remove("hover")
  //       );
  //       elemento.classList.add("hover");
  //     }, 300);
  //   });
  // });
  // fila1.addEventListener("mouseleave", () => {
  //   peliculasFila1.forEach((pelicula) => pelicula.classList.remove("hover"));
  // });
  // fila2.addEventListener("mouseleave", () => {
  //   peliculasFila2.forEach((pelicula) => pelicula.classList.remove("hover"));
  // });
  // fila3.addEventListener("mouseleave", () => {
  //   peliculasFila3.forEach((pelicula) => pelicula.classList.remove("hover"));
  // });
  // fila4.addEventListener("mouseleave", () => {
  //   peliculasFila4.forEach((pelicula) => pelicula.classList.remove("hover"));
  // });

  return (
    <>
      <div class="imagenesDestacadas">
        <div
          id="indicadoresDestacada"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="0"
              class="active bg-primary bg-gradient"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="bg-primary bg-gradient"
            ></button>
            <button
              type="button"
              data-bs-target="#indicadoresDestacada"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class="bg-primary bg-gradient"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="pelicula-destacada pelicula1">
                <div class="container">
                  <h3 class="titulo">
                    The Batman
                    <span class="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p class="description">
                    Cuando un asesino se dirige a la élite de Gotham con una
                    serie de maquinaciones sádicas, un rastro de pistas
                    crípticas envía Batman a una investigación en los bajos
                    fondos. A medida que las pruebas comienzan a acercarse a su
                    casa y se hace evidente la magnitud de los planes del autor,
                    Batman debe forjar nuevas relaciones, desenmascarar al
                    culpable y hacer justicia al abuso de poder y la corrupción
                    que durante mucho tiempo han asolado Gotham City.
                  </p>
                  <button type="button" class="btn boton">
                    <i class="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="pelicula-destacada pelicula2">
                <div class="container">
                  <h3 class="titulo">
                    Uncharted
                    <span class="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p class="description">
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
                  <button type="button" class="btn boton">
                    <i class="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="pelicula-destacada pelicula3">
                <div class="container">
                  <h3 class="titulo">
                    Spider-Man: No Way Home
                    <span class="iconoDestacado">
                      <img
                        src="../RollingProyecto2/img/img-Destacados/iconoDestacado.png"
                        alt="icono destacado"
                      />
                    </span>
                  </h3>

                  <p class="description">
                    Peter Parker es desenmascarado y por tanto no es capaz de
                    separar su vida normal de los enormes riesgos que conlleva
                    ser un súper héroe. Cuando pide ayuda a Doctor Strange, los
                    riesgos pasan a ser aún más peligrosos, obligándole a
                    descubrir lo que realmente significa ser Spider-Man.
                  </p>
                  <button type="button" class="btn boton">
                    <i class="fa-solid fa-play"></i>Reproducir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container categorias">
        <div class="titulo-controles">
          <h3>Populares</h3>
          <div class="indicadores containerIndicadores1 d-none d-xl-block"></div>
        </div>
        <div class="contenedorPrincipal">
          <button
            id="flecha-izquierda"
            class="flecha-izquierda d-none d-xl-block"
            onclick="botonIzquierda1(this.id)"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="contenedorCarousel contenedorJs1">
            <div class="carousel">
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="../img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila1">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr. Strange"
                  />
                </a>
              </div>
            </div>
          </div>
          <button
            id="flecha-derecha"
            class="flecha-derecha d-none d-xl-block"
            onclick="botonDerecha1(this.id)"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div class="container categorias">
        <div class="titulo-controles">
          <h3>Populares</h3>
          <div class="indicadores containerIndicadores2 d-none d-xl-block"></div>
        </div>
        <div class="contenedorPrincipal">
          <button
            id="flecha-izquierda"
            class="flecha-izquierda d-none d-xl-block"
            onclick="botonIzquierda2(this.id)"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="contenedorCarousel contenedorJs2">
            <div class="carousel">
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila2">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr. Strange"
                  />
                </a>
              </div>
            </div>
          </div>
          <button
            id="flecha-derecha"
            class="flecha-derecha d-none d-xl-block"
            onclick="botonDerecha2(this.id)"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div class="container categorias">
        <div class="titulo-controles">
          <h3>Populares</h3>
          <div class="indicadores containerIndicadores3 d-none d-xl-block"></div>
        </div>
        <div class="contenedorPrincipal">
          <button
            id="flecha-izquierda"
            class="flecha-izquierda d-none d-xl-block"
            onclick="botonIzquierda3(this.id)"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="contenedorCarousel contenedorJs3">
            <div class="carousel">
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="../img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila3">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr. Strange"
                  />
                </a>
              </div>
            </div>
          </div>
          <button
            id="flecha-derecha"
            class="flecha-derecha d-none d-xl-block"
            onclick="botonDerecha3(this.id)"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div class="container categorias">
        <div class="titulo-controles">
          <h3>Populares</h3>
          <div class="indicadores containerIndicadores4 d-none d-xl-block"></div>
        </div>
        <div class="contenedorPrincipal">
          <button
            id="flecha-izquierda"
            class="flecha-izquierda d-none d-xl-block"
            onclick="botonIzquierda4(this.id)"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div class="contenedorCarousel contenedorJs4">
            <div class="carousel">
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/animales.jpg"
                    alt="pelicula Animales Fantasticos"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/matrix.jpg"
                    alt="pelicula Matrix"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/sonic.jpg"
                    alt="pelicula Sonic"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/morbius.jpg"
                    alt="pelicula Morbius"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="../img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr.Strange"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/duna.jpg"
                    alt="pelicula Duna"
                  />
                </a>
              </div>
              <div class="pelicula peliculaFila4">
                <a href="/">
                  <img
                    src="./img/img-listaPeliculas/drstrange.jpg"
                    alt="pelicula Dr. Strange"
                  />
                </a>
              </div>
            </div>
          </div>
          <button
            id="flecha-derecha"
            class="flecha-derecha d-none d-xl-block"
            onclick="botonDerecha4(this.id)"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListaPeliculas;
