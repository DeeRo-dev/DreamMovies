import React from "react";
import "./Home.css";
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
            <Col className="Home__Col" xl={9}><h2>¡Ultimo Agregado!</h2></Col>
            <Col className="Home__Col"><h2>Carteles/Publicidad</h2></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
