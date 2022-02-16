
import React, {useEffect} from "react"
import {useParams, Link} from 'react-router-dom'
import NavBar  from "../NavBar/NavBar";
import './DetailTemp.css'
import { useDispatch, useSelector } from "react-redux";
import {getTemp} from "../../store/actions"
import CardTemp from "../CardTemp/CardTemp.jsx";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailTemp(){
  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTemps.seasons)
  const { idSerie } = useParams();
  


  useEffect(()=>{
    dispatch(getTemp(idSerie))
  },[dispatch])

  return(
    
    <div className="DetailTemp__Content"> 
      <NavBar/>
      <Container fluid  className="DetailTemp__Container">
       
          <div className="DetailTemp__ContentTitleTemp">
            <h1 className="DetailTemp__TitleTemp">Temporadas</h1>
          </div>
          <Container fluid  className="DetailTemp__ContentCards">
              {
                tempSimp?.map(i =>{
                 
                  return(

                    <Link to={`/capitulos/${idSerie}/${i.season_number}`} >
                    <div key={i.id}  className="DetailTemp__Cards">

                    <CardTemp
                      
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
       
        </Container>
    </div>

  )
}