import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { peliculasPopulares } from "../../store/actions";
import { NavBar } from "../index";
import { Container, Row, Col, Image, Ratio } from "react-bootstrap";


function Home() {
 

  const dispatch = useDispatch();
  
useEffect(()=> {
  dispatch(peliculasPopulares())
},[dispatch])
  const pMasvistas = useSelector(state =>  state.peliculasPopulares)
  
  // console.log(pMasvistas?.results?.[0]?.id)

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
                    <img src="" alt="" />
                  </div>
                </Link>
                <Link to="/temp/15260">
                  <div className="Home__ContentEntrarSerie">
                    <img src="" alt="" />
                  </div>
                </Link>
              </Container>
              <Container fluid className="Home__ContentMovie">
                <div>
                  <h1>Proximamente</h1>
                  <h2>Se podran ver las mejores peliculas en DreamMovies</h2>
                </div>
            
                <Link to={`/movie/${pMasvistas?.results?.[1]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[1]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[2]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[2]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[3]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[3]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[4]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[4]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[5]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[5]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                
                <Link to={`/movie/${pMasvistas?.results?.[6]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[6]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[7]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[7]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[8]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[8]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[9].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[9]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[10].id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[10]?.poster_path}`} alt="" />
                  </Col>
                </Link> 
                <Link to={`/movie/${pMasvistas?.results?.[11]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[11]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[12]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[12]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[13]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[13]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[14]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[14]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[15]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[15]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[16]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[16]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[17]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[17]?.poster_path}`} alt="" />
                  </Col>
                </Link>
                <Link to={`/movie/${pMasvistas?.results?.[18]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[18]?.poster_path}`} alt="" />
                  </Col>
                </Link>
             
                {/* <Link to={`/movie/${pMasvistas?.results?.[20]?.id}/`}>
                  <Col xxl={4} className="Home__ContentPoster2">
                    <Image  src={`https://image.tmdb.org/t/p/w500${pMasvistas?.results?.[20]?.poster_path}`} alt="" />
                  </Col>
                </Link> */}
              </Container>
            </Col>
          
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
