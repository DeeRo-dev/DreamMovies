import React from "react";
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../index";
import { Container,  } from "react-bootstrap";

function Home() {
  var alto = window.pageXOffset;
  console.log("alto",alto);
  return (
    <div>
      <NavBar />
      <Container fluid className="ContainerHome">
        <div>
          <h2>Ultimas Agregadas</h2>
        </div>
      </Container>
    </div>
  );
}

export default Home;
