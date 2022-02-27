import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { searchPelicula } from "../../store/actions/index";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavBar() {
  const buscador = useSelector((state) => state.searchPelicula);

  const navigateTo = useNavigate();
  

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {

    console.log(input);
    navigateTo('/search/' + input)
  }

  return (
    <Container fluid className="NavBar__ContainerNav">
      <Navbar className="NavBar__Nav" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="http://localhost:3000/"
            className="NavBar__TitleDream"
          >
            Dream Movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
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

            <Form onSubmit={(e) => handleSubmit(e)} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleChange}
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel className="NavBar__Carousel">
        <Carousel.Item className="NavBar__Carousel" interval={4000}>
          <img
            className="NavBar__Img"
            src="https://thumbs.dreamstime.com/b/online-movies-cinema-streaming-banner-laptop-d-glasses-popcorn-tickets-online-movies-cinema-streaming-176525320.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Cinema</h3>
            <p>Podras ver las peliculas que mas te guste!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            src="http://i.imgur.com/4bucF8b.png"
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
  );
}

export default NavBar;
