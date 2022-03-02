import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { peliculasPopulares } from "../../store/actions";
import { NavBar } from "../index";
import { Container, Row, Col, Image, Ratio } from "react-bootstrap";
import { useState } from "react";

function Home() {
  const poster1 = [
    "https://blogdesuperheroes.es/imagen-noti/109798_big-1280x720.jpg",
  ];
  const poster2 = [
    "https://www.dondeir.com/wp-content/uploads/2020/01/the-batman-2022-poster.jpg",
  ];
  const poster3 = [
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEfNLUCL5WBygMcyw9J7V4RacUqaZWSW3rMaP9bex7QTM4FepY",
  ];
  const poster4 = [
    "https://img.aullidos.com/imagenes/caratulas/the-matrix-resurrection-poster-new.jfif",
  ];
  const poster5 = [
    "https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/NHTBN6LFVNFUFFAVV5JVMEAY2Y.JPG",
  ];
  const poster6 = [
    "https://cuevana3.io/wp-content/uploads/2022/02/catch-the-fair-one-54705-poster-200x300.jpg",
  ];
  const poster7 = [
    "https://cuevana3.io/wp-content/uploads/2022/02/caida-en-picado-el-caso-contra-boeing-54642-poster-200x300.jpg",
  ];
  const poster8 = [
    "https://cuevana3.io/wp-content/uploads/2022/02/american-underdog-54505-poster-200x300.jpg",
  ];
  const simp = [
    "https://ep00.epimg.net/elpais/imagenes/2017/09/21/fotorrelato/1506004325_686220_1506008048_album_normal.jpg",
  ];
  const hAventura = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHi8_RLEG56RekY8iVjR3vcv8aHxD_S5DwbKsCn4Gj69posdRRmmuSMXz8G4GQAc7atQ&usqp=CAU",
  ];


  const dispatch = useDispatch();
  
useEffect(()=> {
  dispatch(peliculasPopulares())
},[dispatch])
  const pMasvistas = useSelector(state =>  state.peliculasPopulares)
  
  console.log(pMasvistas.results[0].id)

  return (
    <div>
      <NavBar />
      <Container fluid className="Home__Contaner">
        <Container fluid className="Home__Contaner_movies">
          <Row className="Home__Row">
            <Col className="Home__Col" xxl={9}>
            <h2 className="Home__ContentSeriesTitlte">¡Ultimo Agregado!</h2>
              <Container className="Home__ContentSeries">
              
                <Link to="/temp/456">
                  <div className="Home__ContentEntrarSerie">
                    <img src={simp} alt="" />
                  </div>
                </Link>
                <Link to="/temp/15260">
                  <div className="Home__ContentEntrarSerie">
                    <img src={hAventura} alt="" />
                  </div>
                </Link>
              </Container>
              <Container className="Home__ContentMovie">
                <div>
                  <h1>Proximamente</h1>
                  <h2>Se podran ver las mejores peliculas en DreamMovies</h2>
                </div>
                
                <Link to={`/movie/${pMasvistas.results[12].id}/`}>
                  <Col className="Home__ContentPoster1">
                    <Ratio aspectRatio="16x9">
                      <Image responsive src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[12].backdrop_path}`} alt="" />
                    </Ratio>
                  </Col>
                </Link>

                <Link to={`/movie/${pMasvistas.results[4].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[4].poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas.results[5].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[5].poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas.results[3].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[3].poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas.results[10].id}/`}>
                  <Col className="Home__ContentPoster1">
                    <Ratio aspectRatio="16x9">
                      <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[10].backdrop_path}`} alt="" />
                    </Ratio>
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas.results[6].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[6].poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas.results[8].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[8].poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas.results[11].id}/`}>
                  <Col className="Home__ContentPoster2">
                    <Image fluid src={`https://image.tmdb.org/t/p/w500${pMasvistas.results[11].poster_path}`} alt="" />
                  </Col>
                </Link>
              </Container>
            </Col>
          
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
