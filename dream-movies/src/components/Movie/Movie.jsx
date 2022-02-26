import React, { useEffect } from "react";
import { NavBar } from "../index";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getOneCapitulo, getTemp, getVideoSerie } from "../../store/actions";
import DetailTempMovie from "./DetailTempMovie.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movie.css";


function Movie() {
  const dispatch = useDispatch();
  const capitulo = useSelector((state) => state.oneCapitulo);
  const tempSimp = useSelector((state) => state.allTemps.backdrop_path);
  const videoSerie = useSelector((state) => state.videoSerie);
  const { idSerie, idTemporada, idCapitulo } = useParams();

  useEffect(() => {
    dispatch(getOneCapitulo(idSerie, idTemporada, idCapitulo));
    dispatch(getTemp(idSerie));
    dispatch(getVideoSerie(idSerie));
  }, [dispatch]);

  const backgroundImageURL = `https://image.tmdb.org/t/p/w500/${tempSimp}`;

  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
  };

  console.log("videoSerie", videoSerie);
  
  return (
    <div>
      <Container fluid className="Movie__Container">
        <Row style={containerStyle} id="MovieRowId">
          <Col sm={12} xl={12} xxl={2} className="Movie__Col_Foto">
            <img
              id="imgMovie"
              src={`https://image.tmdb.org/t/p/w500/${capitulo.still_path}`}
              alt=""
            />
            {/*  Nombre y Fecha de capitulo recortado solo al año */}
          </Col>
          <Col  className="Movie__Col" sm={12}  xxl={6}>
            <h2>
              {capitulo?.name}. ({capitulo.air_date?.substring(0, 4)})
            </h2>
            <p>{capitulo?.overview}</p>
          </Col>
          <Col className="Movie__Col" sm={12} xxl={4}>
            <h3>Puntuacion {capitulo.vote_average?.toFixed()} / 10</h3>
          </Col>
        </Row>
        <Row className="Movie__Row_Reproductor">
          <Col className="Movie__Col_Reproductor">
            <div className="Movie__Col_Reproductor_Container">

            <iframe
              src={`https://www.youtube.com/embed/${
                videoSerie.results
                  ? videoSerie.results[0]?.key
                    ? videoSerie.results[0].key
                    : "wzCHvUMaaG0"
                  : "wzCHvUMaaG0"
              }`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </div>
          </Col>
        </Row>
        <Row className="Movie__Row_MasEpisodios">
          <Col xxl={12} className="Movie__Col_MasEpisodios">
            <DetailTempMovie />
          </Col>
        </Row>
        <Row className="Movie__Row_info">
          <Col xxl={12} className="Movie__Col_info">
            <div
              class="fb-comments"
              data-href={`localhost:3000/movie/${idSerie}/${idTemporada}/${idCapitulo}`}
              data-width="100"
              data-numposts="5"
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
