import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { peliculasPopulares } from "../../store/actions/index";
import "./Navbar.css";
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
  const peliculas = useSelector((state) => state.peliculasPopulares?.results);
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const [navBarBackground, setNavBarBackgorund] = useState(false);
  const [input, setInput] = useState("");

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 10) {
        setNavBarBackgorund(true);
      }
    } else if (window.scrollY >= 90) {
      setNavBarBackgorund(true);
    } else {
      setNavBarBackgorund(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    if (input !== "" && input !== ".") {
      navigateTo("/search/" + input);
    } else {
      e.preventDefault()
      alert("Selecciona un nombre valido");
    }
  }

  useEffect(() => {
    dispatch(peliculasPopulares());
  }, [dispatch]);

  console.log(peliculas);

  return (
    <Container fluid className="NavBar__ContainerNav">
      <Navbar
        className={navBarBackground ? "navbar active" : "navbar false"}
        variant="dark"
        fixed="top"
        expand="lg"
      >
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
              <Nav.Link href="#action2">Recomendado</Nav.Link>
              <NavDropdown title="Generos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
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
            src={`https://image.tmdb.org/t/p/original/${peliculas?.[0].backdrop_path}`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            src={`https://image.tmdb.org/t/p/original/${peliculas?.[1].backdrop_path}`}
            alt="Second slide"
            className="NavBar__Img"
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="NavBar__Img"
            src={`https://image.tmdb.org/t/p/original/${peliculas?.[2].backdrop_path}`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default NavBar;
