
import React, {useEffect} from "react"
import {useParams, Link} from 'react-router-dom'
import NavBar  from "../NavBar/NavBar";
import './DetailTempMovie.css'
import { useDispatch, useSelector } from "react-redux";
import {getTemp} from "../../store/actions"
import CardTemp from "../CardTemp/CardTemp.jsx";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailTempMovie(){
  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTemps.seasons)
  const { idSerie } = useParams();
  


  useEffect(()=>{
    dispatch(getTemp(idSerie))
  },[dispatch])

  return(
          <Container fluid  className="DetailTemp__ContentCards">
              {
                tempSimp?.map(i =>{
                 
                  return(

                    <Link key={i.id} to={`/capitulos/${idSerie}/${i.season_number}`} >
                    <div   key={i.id}  className="DetailTemp__Cards">

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