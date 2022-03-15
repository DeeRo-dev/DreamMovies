import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { peliculasPopulares, listaGeneros } from "../../store/actions/index";
import "./NavBarMovie.css";
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
  const generos = useSelector((state) => state.listaGeneros);
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [navBarBackground, setNavBarBackgorund] = useState(false);

  const changeBackground = () => {
    if (screen.width < 1500) {
      if (window.scrollY >= 20) {
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
      e.preventDefault();
      alert("Selecciona un nombre valido");
    }
  }

  useEffect(() => {
    dispatch(peliculasPopulares());
    dispatch(listaGeneros());
  }, [dispatch]);

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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Recomendado</Nav.Link>
              <NavDropdown title="Generos" id="navbarScrollingDropdown">
                {generos?.genres?.map((i) => {
                  return (
                    <NavDropdown.Item
                      href={`/generos/${i.id}`}
                      className="GenreList"
                    >
                      {i.name}
                    </NavDropdown.Item>
                  );
                })}
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
    </Container>
  );
}

export default NavBar;
