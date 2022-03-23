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
        <Container className="Footer__TextDerechos">
          <h1 className="Footer__Titleh1">™DreamMovies</h1>
          <hr />
          <div className="Footer__Span">
            <span className="Footer__Span">®Derechos reservados</span>
           <span className="Footer__Span">©Copyright</span>
          </div>
         
        </Container>
            
        </Col>
        <Col md={5} className="Footer__prueba2">
      <Container className="Footer__TitleDevs">
        <h1 className="Footer__Titleh1">Desarrolladores</h1>
       <hr />
      </Container>
        <Container className="Footer__ContentDevs">
           <div className="Footer__NombresDevs">
          
              <a  target={'blanck'} href="https://derek-cabrera.vercel.app/"><h4 className="Footer__Titleh4">Derek Cabrera</h4></a>
             
              <ul>
              <a  target={'blanck'} href="https://www.linkedin.com/in/derek-cabrera-fullstack/"> <li  className="Footer__Li"><FontAwesomeIcon  className="Footer__Icon" icon={faLinkedin} /></li></a>
              <a  target={'blanck'} href="https://github.com/DeeRo-dev"> <li className="Footer__Li" ><FontAwesomeIcon className="Footer__Icon" icon={faGithub} /></li></a>
              </ul>
            </div> 
            <div className="Footer__NombresDevs">
            
            <a  target={'blanck'} href="https://portfolio-liammarega.netlify.app/"><h4 className="Footer__Titleh4">Liam Marega</h4></a>
              
              <ul >
              <a  target={'blanck'} href="https://www.linkedin.com/in/liam-marega/"> <li className="Footer__Li"><FontAwesomeIcon className="Footer__Icon" icon={faLinkedin} /></li></a>
              <a  target={'blanck'} href="https://github.com/LiamMarega"> <li className="Footer__Li"><FontAwesomeIcon className="Footer__Icon" icon={faGithub} /></li></a>
              </ul>
            </div> 
        </Container>
    
        </Col>
        <Col className="Footer__prueba3">
        <Container className="Footer__TextContact">
              <h1 className="Footer__Titleh1"> Contacto </h1>
              <hr />
              <ul>
                  <li className="Footer__Email"> Dream.Movi3s@gmail.com</li>
               
              </ul>
           </Container>
        </Col>
      </Row>
    </Container>
    <Container>
      
    </Container>
    </div>
 )
  
}