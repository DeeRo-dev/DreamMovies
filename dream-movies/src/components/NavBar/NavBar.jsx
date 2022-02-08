import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Container fluid className="containerNav">
      <Carousel>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="http://www.emprendemania.com/wp-content/uploads/2013/08/thesimpsons.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="https://laquilombo.files.wordpress.com/2014/08/los-simpsons-banner.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src="https://elvortex.com/wp-content/uploads/2014/10/the-simpsons-banner-db96ea.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
    </div>
  );
}

export default NavBar;
