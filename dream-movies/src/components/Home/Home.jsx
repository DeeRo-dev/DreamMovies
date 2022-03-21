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
  const pMasvistas = useSelector(state =>  state.peliculasPopulares.results)

    console.log(pMasvistas)

  return (
    <div>
      <NavBar />
      <Container fluid className="Home__Contaner">
        <Container fluid className="Home__Contaner_movies">
          <Row className="Home__Row">
            <Col className="Home__Col" xxl={9}>
            <h2 className="Home__ContentSeriesTitlte">¡Lo mas visto!</h2>
              <Container className="Home__ContentSeries">
              

                 {
                   pMasvistas?.map(e =>{
                     return(
                      <Link to={`/movie/${e?.id}/`}>
                      <Col  className="Home__ContentPoster">
                        <Image className="Home__ContentPosterImg" src={`https://image.tmdb.org/t/p/w500${e?.poster_path}`} alt="" />
                        <h2>{e?.release_date}</h2>
                      </Col>
                    </Link>
                     )
                   })
                 }
              </Container>
            </Col>
          
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
