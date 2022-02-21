import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../index";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
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
              <button>SIMPSON</button>
              </Link>
              <Link to="/temp/15260" >
              <button>Hora de aventura</button>
              </Link>
            </Container>
            <Container className="Home__ContentMovie">
              <Col className="Home__ContentPoster1">sds</Col>
              <Col className="Home__ContentPoster2">sasdasdas</Col>
              <Col className="Home__ContentPoster2">dasdd</Col>
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
