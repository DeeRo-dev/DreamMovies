import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Ratio } from "react-bootstrap";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
  return(
    <div>
    <Container fluid className="Footer__Content">
      <Row>
        <Col  className="Footer__prueba">
             <h2>Desarrolladores</h2>
           <div>
           
              <h4>Derek Cabrera</h4>
              <ul>
                 <li><FontAwesomeIcon icon={faLinkedin} /></li>
                  <li><FontAwesomeIcon icon={faGithub} /></li>
              </ul>
            </div> 
            <div>
              
              <h4>Liam Marega</h4>
              <ul>
              <li><FontAwesomeIcon icon={faLinkedin} /></li>
                  <li><FontAwesomeIcon icon={faGithub} /></li>
              </ul>
            </div> 
        </Col>
        <Col  className="Footer__prueba2">
          <div>
              <h1> contacto </h1>
              <ul>
                 
          
                  <li>insta fisticio de la web</li>
              </ul>
           </div>
        </Col>
        <Col className="Footer__prueba3">
        <div>
          <h1>Dream Movies</h1>
           <h4>Derechos reservados</h4>
           <h4>copy rigth</h4>
        </div>
        </Col>
      </Row>
    </Container>
    <Container>
      
    </Container>
    </div>
 )
  
}