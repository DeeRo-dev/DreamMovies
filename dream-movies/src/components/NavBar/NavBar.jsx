import React, { Fragment } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div >
      <Container fluid className="NavBar__ContainerNav">
        <Navbar  className="NavBar__Nav"   fixed="top" expand="lg">
          <Container fluid >
            <Navbar.Brand href="http://localhost:3000/" className="NavBar__TitleDream">Dream Movies</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>  */}
          </Container>
        </Navbar>
    <Carousel>
          <Carousel.Item interval={4000}>
            <img
               className="NavBar__Img"
              src="https://media.istockphoto.com/photos/video-movie-concept-movie-background-picture-id1170514267?b=1&k=20&m=1170514267&s=170667a&w=0&h=Z4_cBKgB5AbLxR53xHrQN7IIE-fIWAww3O12qZY6yQA="
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Cinema</h3>
              <p>Podras ver las peliculas que mas te guste!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              src="https://i1.wp.com/www.senpai.com.mx/wp-content/uploads/2021/10/Hora-de-Aventura-es-recreado-al-estilo-del-anime-con-estas-increibles-ilustraciones.jpg?fit=1280%2C720&ssl=1"
              alt="Second slide"
              className="NavBar__Img"
            />
         
            <Carousel.Caption>
              <h3>Hora de Aventura</h3>
              <p>Podras ver la serie completa</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
                className="NavBar__Img"
              src="https://www.milenio.com/uploads/media/2020/06/12/doblaje-mexicano-serie-animada-contribuido.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Los Simpsons</h3>
              <p>Podras ver la serie completa</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
      </Container>
    </div>
  );
}

export default NavBar;
