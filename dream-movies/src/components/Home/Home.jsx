import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { peliculasPopulares } from "../../store/actions";
import { NavBar } from "../index";
import { Container, Row, Col, Image, Ratio } from "react-bootstrap";
import Footer from "../Footer/Footer";

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
          

  <h2 className="Home__ContentPeliTitlte">¡Series animadas!</h2>
  <hr />
        <Container className="Home__ContentSerie">
          
              <Link to="/temp/456" >
                <div className="Home__Colum">
                   <Image className="Home__ContentPosterImgSerie" src="https://www.abc.es/media/capitulos/000/082/899/el-amor-es-una-cosa-hecha-anicos-1.jpg" alt="" /> 
                </div>
            
              </Link>
              <Link to="/temp/15260" >
              <div className="Home__Colum">
               <Image className="Home__ContentPosterImgSerie" src="https://www.raccoongames.es/img/productos/2014/12/14/01319300101_g.jpg" alt="" /> 
                </div>
              </Link>
            </Container>
    


          <Row className="Home__Row">
            <Col className="Home__Col" xxl={9}>
            <h2 className="Home__ContentPeliTitlte">¡Lo mas visto!</h2>
            <hr />
              <Container className="Home__ContentPeli">
              

                 {
                   pMasvistas?.map(e =>{
                     return(
                      <Link className="Home__ContentPelilink" to={`/movie/${e?.id}/`}>
                      <Col  className="Home__ContentPoster">
                        <Image className="Home__ContentPosterImg" src={`https://image.tmdb.org/t/p/w500${e?.poster_path}`} alt="" />
                        <h2 className="Home__TitlePoster">{e?.release_date}</h2>
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
     
      <Footer/>
    </div>
  );
}

export default Home;
