import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../index";
import { Container, Row, Col } from "react-bootstrap";


function Home() {


  const poster1 = ['https://blogdesuperheroes.es/imagen-noti/109798_big-1280x720.jpg' ]
  const poster2 =  ['https://www.dondeir.com/wp-content/uploads/2020/01/the-batman-2022-poster.jpg']
  const poster3 =['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEfNLUCL5WBygMcyw9J7V4RacUqaZWSW3rMaP9bex7QTM4FepY']
  const poster4 =['https://img.aullidos.com/imagenes/caratulas/the-matrix-resurrection-poster-new.jfif']
  const poster5 =['https://cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/NHTBN6LFVNFUFFAVV5JVMEAY2Y.JPG']
  const poster6 =['https://cuevana3.io/wp-content/uploads/2022/02/catch-the-fair-one-54705-poster-200x300.jpg']
  const poster7 =['https://cuevana3.io/wp-content/uploads/2022/02/caida-en-picado-el-caso-contra-boeing-54642-poster-200x300.jpg']
  const poster8 =['https://cuevana3.io/wp-content/uploads/2022/02/american-underdog-54505-poster-200x300.jpg']
  const simp = ['https://ep00.epimg.net/elpais/imagenes/2017/09/21/fotorrelato/1506004325_686220_1506008048_album_normal.jpg']
  const hAventura = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHi8_RLEG56RekY8iVjR3vcv8aHxD_S5DwbKsCn4Gj69posdRRmmuSMXz8G4GQAc7atQ&usqp=CAU']
  return (
    <div>
      <NavBar />
      <Container fluid className="Home__Contaner">
        <Container fluid className="Home__Contaner_movies">
          <Row className="Home__Row">
            <Col className="Home__Col" xl={9}>
            <Container className="Home__ContentSeries">
            <h2>¡Ultimo Agregado!</h2>
              <Link to="/temp/456" >
                <div className="Home__ContentEntrarSerie">
                  <img src={simp} alt="" />
                </div>
            
              </Link>
              <Link to="/temp/15260" >
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
               <Link
                to={`/movie/${315635}/`}
              > 
              <Col className="Home__ContentPoster1"><img src={poster1} alt="" /></Col>
              </Link>
               
              <Link
                to={`/movie/${414906}/`}
              > 
              <Col className="Home__ContentPoster2"> <img src={poster2} alt="" /></Col>
              </Link>
              <Link
                to={`/movie/${41446}/`}
              > 
              <Col className="Home__ContentPoster2"> <img src={poster3} alt="" /></Col> 
              </Link>
              <Link
                to={`/movie/${603}/`}
              > 
              <Col className="Home__ContentPoster2"> <img src={poster4} alt="" /></Col> 
              </Link>
              <Link
                to={`/movie/${335787}/`}
              > 
              <Col className="Home__ContentPoster1"> <img src={poster5} alt="" /></Col>
              </Link>
              <Link
                to={`/movie/${18397}/`}
              > 
               <Col className="Home__ContentPoster2"> <img src={poster6} alt="" /></Col>
               </Link>
               <Link
                to={`/movie/${18397}/`}
              > 
              <Col className="Home__ContentPoster2"> <img src={poster7} alt="" /></Col> 
              </Link>
              <Link
                to={`/movie/${673309}/`}
              > 
              <Col className="Home__ContentPoster2"> <img src={poster8} alt="" /></Col> 
              </Link>
            </Container>
            </Col>
            <Col className="Home__Col"><h2>Carteles/Publicidad</h2></Col>
          </Row>
        </Container>

      </Container>
    </div>
  );
}

export default Home;
