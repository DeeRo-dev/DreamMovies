
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
  const tempSimp = useSelector((state) => state.allTempTheSimp.seasons)
  const { idSerie } = useParams();
  
  console.log("tempSimp", tempSimp)

  useEffect(()=>{
    dispatch(getTemp(idSerie))
  },[dispatch])

  return(
    
    <div className="DetailTemp__Content"> 
      <NavBar/>
      <Container fluid  className="DetailTemp__Container">
       
          <div className="DetailTemp__ContentTitleTemp">
            <h3 className="DetailTemp__TitleTemp">Temporadas</h3>
          </div>
          <Container fluid  className="DetailTemp__ContentCards">
              {
                tempSimp?.map(i =>{
                 
                  return(
                    <div key={i.id}  className="DetailTemp__Cards">
                    <Link to={`/capitulos/${idSerie}/${i.season_number}`} >
                    <CardTemp
                      
                       img={i.poster_path}
                       estreno={i.air_date}
                       temp={i.name}
                    />
                    </Link>
                    </div>
                  )
                }
            
                  )
              }
           
          </Container>
       
        </Container>
    </div>

  )
}