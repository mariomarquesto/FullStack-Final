import React, { useState } from "react";
import "./reproductor-video.styles.css";
import { default as video1 } from "./Videos/ecos-de-un-crimen.mp4";
import { default as video2 } from "./Videos/mujer-maravilla-mejor-escena.mp4";
import { default as video3 } from "./Videos/mujer-maravilla-tierra-de-nadie.mp4";
import { default as video4 } from "./Videos/mujer-maravilla.mp4";
import { default as video5 } from "./Videos/thor-amor-y-trueno.mp4";
import { default as video6 } from "./Videos/thor-mundo-oscuro.mp4";
import { useNavigate } from "react-router-dom";


const ReproductorVideo = () => {
  const navigate = useNavigate();

  const navegarCarrusel = () => {
    navigate({
      pathname: "/",
    });
  };

  const videos = [
    {
      titulo: "Ecos de Un Crímen",
      sinopsis: "sinopsis 1",
      src: video1,
    },
    {
      titulo: "Ecos de Un Crímen Sin Salida no Hay Escape",
      sinopsis: "sinopsis 2",
      src: video2,
    },
    {
      titulo: "La Mujer Maravilla",
      sinopsis: "sinopsis 3",
      src: video3,
    },
    {
      titulo: "Mujer Maravilla Tierra de Nadie",
      sinopsis: "sinopsis 4",
      src: video4,
    },
    {
      titulo: "Mujer Maravilla Mejor Escena",
      sinopsis: "sinopsis 5",
      src: video5,
    },
    {
      titulo: "Thor Amor Y Trueno",
      sinopsis: "sinopsis 6",
      src: video6,
    },
  ];

  const [videoActual, setVideoActual] = useState(videos[0]);

  const renderVideoList = videos.map((video, index) => (
    <div
      className="list"
      onClick={() => {
        setVideoActual(videos[index]);
      }}
    >
      <video src={video.src} className="list-video"></video>
      <h3 className="list-title">{video.titulo}</h3>
    </div>
  ));

  return (
    <>
    <div><h1>STRANGER FLIX</h1></div>
      <div className="container">
        
        <div className="main-video-container">
          <video
            src={videoActual.src}
            loop
            controls
            className="main-video"
            autoPlay={true}
          ></video>
          <h3 className="main-vid-title">{videoActual.titulo}</h3>
          <p>{videoActual.sinopsis}</p>
        </div>

        <div className="video-list-container">{renderVideoList}</div>

        <div className="button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={navegarCarrusel}
          >
            <samp></samp>
            <samp></samp>
            <samp></samp>
            <samp></samp>
            volver

          </button>
        </div>
      </div>
    </>
  );
};

export default ReproductorVideo;
