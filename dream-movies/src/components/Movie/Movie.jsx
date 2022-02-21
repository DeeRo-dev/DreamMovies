import React, { useEffect } from "react";
import { NavBar } from "../index";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getOneCapitulo, getTemp } from "../../store/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movie.css";

function Movie() {
  const dispatch = useDispatch();
  const capitulo = useSelector((state) => state.oneCapitulo);
  const tempSimp = useSelector((state) => state.allTemps.backdrop_path)
  const { idSerie, idTemporada, idCapitulo } = useParams();


  useEffect(() => {
    dispatch(getOneCapitulo(idSerie, idTemporada, idCapitulo));
    dispatch(getTemp(idSerie))
  }, [dispatch]);

   const backgroundImageURL = `https://image.tmdb.org/t/p/w500/${tempSimp}`;

    const containerStyle = {
      backgroundImage:
        `url(${backgroundImageURL})`,
    };
    
  console.log("tempplog",tempSimp);
  return (
    <div>
      <Container fluid className="Movie__Container">
        <Row style={containerStyle} id="MovieRowId" >
          <Col xl={2} className="Movie__Col">
            <img
              id="imgMovie"
              src={`https://image.tmdb.org/t/p/w500/${capitulo.still_path}`}
              alt=""
            />
            {/*  Nombre y Fecha de capitulo recortado solo al año */}
          </Col>
          <Col >
            <h2>
              {capitulo?.name}. ({capitulo.air_date?.substring(0, 4)})
            </h2>
            <p>{capitulo?.overview}</p>
          </Col>
          <Col >
          <h3>Puntuacion {capitulo.vote_average?.toFixed()} / 10</h3>
          </Col>
        </Row>
        <Row className="Movie__Row_info">
          <Col className="Movie__Col_info">
            <h3>nashe</h3>
            
            <div
              className="fb-comments"
              data-href="http://localhost:3000/movies"
              data-width=""
              data-numposts="5"
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
