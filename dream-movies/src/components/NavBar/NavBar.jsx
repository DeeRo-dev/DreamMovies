import React, { Fragment } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Container fluid className="containerNav">
        <Navbar bg="primary" variant="dark" fixed="top" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
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
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-50"
              src="http://www.emprendemania.com/wp-content/uploads/2013/08/thesimpsons.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>PRIMER FOTO</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-50"
              src="https://laquilombo.files.wordpress.com/2014/08/los-simpsons-banner.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>SEGUNDA FOTO</h3>
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
              <h3>TERCER FOTO</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default NavBar;
