import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { getPelicula, getPeliculaVideo } from "../../store/actions";
import DetailTempMovie from "./DetailTempMovie.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TheRealMovie.css";

function TheRealMovie() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const capitulo = useSelector((state) => state.oneCapitulo);
  const video = useSelector((state) => state.videoSerie);

  const { idSerie } = useParams();

  useEffect(() => {
    dispatch(getPelicula(idSerie));
    dispatch(getPeliculaVideo(idSerie));
  });

  const backgroundImageURL = `https://image.tmdb.org/t/p/w500/${capitulo?.belongs_to_collection?.backdrop_path}`;

  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
  };

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  return (
    <div>
      <Container
        fluid={+true}
        className={loading ? "loading true" : "loading false"}
      >
        <Spinner animation="grow" variant="light" />
      </Container>

      <Container fluid className="Movie__Container">
        <Row style={containerStyle} id="MovieRowId">
          <Col sm={12} xl={12} xxl={2} className="Movie__Col_Foto">
            <img
              id="imgMovie"
              src={`https://image.tmdb.org/t/p/w500/${capitulo?.backdrop_path}`}
              alt=""
            />
            {/*  Nombre y Fecha de capitulo recortado solo al año */}
          </Col>
          <Col className="Movie__Col" sm={12} xxl={6}>
            <h2>
              {capitulo?.original_title}. (
              {capitulo.release_date?.substring(0, 4)})
            </h2>
            <p>{capitulo?.overview}</p>
          </Col>
          <Col className="Movie__Col" sm={12} xxl={4}>
            <div className="puntuacionDiv">
              <h3>Puntuacion {capitulo.vote_average?.toFixed()} / 10</h3>
            </div>
          </Col>
        </Row>
        <Row className="Movie__Row_Reproductor">
          <Col className="Movie__Col_Reproductor">
            <div className="Movie__Col_Reproductor_Container">
              {
                <iframe
                  src={`https://www.youtube.com/embed/${
                    video.results
                      ? video.results[0]?.key
                        ? video.results[0].key
                        : "wzCHvUMaaG0"
                      : "wzCHvUMaaG0"
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              }
            </div>
          </Col>
        </Row>
        <Row className="Movie__Row_MasEpisodios">
          <Col xxl={12} className="Movie__Col_MasEpisodios">
            <h3>PELICULAS SIMILARES</h3>
            <DetailTempMovie />
          </Col>
        </Row>

       {/*  <Row className="Movie__Row_info">
          <Col xl={12} className="Movie__Col_info">
            <div
              className="fb-comments"
              data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
              data-width="100"
              data-numposts="3"
            ></div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default TheRealMovie;
