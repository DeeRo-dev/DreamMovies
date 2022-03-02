import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { searchPelicula } from "../../store/actions";
import CardSearchPelicula from "../CardTemp/CardTemp.jsx";
import { Container, Spinner } from "react-bootstrap";
import shrekTriste from "../../Images/shrekTriste.png"
import "./SearchPeliculas.css";




export default function DetailTemp() {
  const dispatch = useDispatch();
  const pelicula = useSelector((state) => state.searchPelicula);
  const { idPelicula } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    dispatch(searchPelicula(idPelicula))
  },[dispatch])

console.log(pelicula);

setTimeout(() => {
  setLoading(false);
}, 4000);


if (pelicula?.results?.length > 0) {
  return (
    <div className="DetailTemp__Content">
      <Container
        fluid={+true}
        className={loading ? "loading true" : "loading false"}
      >
       
        <Spinner animation="border" variant="dark" />
      </Container>
      <NavBar />
      <Container fluid className="DetailTemp__Container">
      {
                pelicula.results?.map(i =>{
                 
                  return(

                    <Link to={`/movie/${i.id}/`} >
                    <div key={i.id}  className="DetailTemp__Cards">

                    <CardSearchPelicula
                      
                       img={i.poster_path}
                       estreno={i.air_date}
                       temp={i.name}
                    />
                    </div>
                    </Link>
                  )
                }
            
                  )
              }
           
      </Container>
    </div>
  );
} 
  else return (
    <div className="DetailTemp__Content">
      <Container
        fluid={+true}
        className={loading ? "loading true" : "loading false"}
      >
       
        <Spinner animation="border" variant="dark" />
      </Container>
     <NavBar />
      <Container fluid className="DetailTemp__Container_Error">
        <h2>NO SE ENCONTRARON PELICULAS CON ESE NOMBRE</h2>
           <img src={shrekTriste} alt="" />
      </Container>
    </div>
    
  );
  
}
