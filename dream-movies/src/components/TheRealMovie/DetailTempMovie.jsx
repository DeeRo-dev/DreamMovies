
import React, {useEffect} from "react"
import {useParams, Link, useNavigate} from 'react-router-dom'
import NavBar  from "../NavBar/NavBar";
import './DetailTempMovie.css'
import { useDispatch, useSelector } from "react-redux";
import {getTemp, peliculaSimilar} from "../../store/actions"
import CardTemp from "../CardTemp/CardTemp.jsx";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailTemp(){
  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTemps.seasons)
  const pelicula = useSelector((state) => state.peliculasSimilares.results);
  const { idSerie } = useParams();
  
  const navigateTo = useNavigate();

  function handleSubmit(input) {
    navigateTo('/movie/' + input)
  }

  useEffect(()=>{
    dispatch(getTemp(idSerie))
    dispatch(peliculaSimilar(idSerie));
  })



  return(
          <Container fluid  className="DetailTemp__ContentCards">
              {
                pelicula?.map(i =>{
                 
                  return(

                    <Link to={`/movie/${i.id}/`} >
                    <div key={i.id}  className="DetailTemp__Cards">

                    <CardTemp
                      key={i.id}
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
      

  )
}