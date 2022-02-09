import React from "react";
import { NavBar } from "../index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Movie.css";
function Movie() {
  return (
    <div>
      <NavBar />
      <Container fluid className="Movie__Container">
        <Row className="Home__Row">
          <Col className="Home__Col">
            <h2>MOVIE NAME</h2>
            <div className="Movie__Reproductor"></div>
          </Col>
        </Row>
        <Row className="Home__Row">
          <Col className="Home__Col">
            <h2>MOVIE NAME</h2>
            <div
              class="fb-comments"
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
