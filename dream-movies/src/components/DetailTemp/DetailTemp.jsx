
import React, {useEffect} from "react"
import NavBar  from "../NavBar/NavBar";
import './DetailTemp.css'
import { useDispatch, useSelector } from "react-redux";
import {getTempSimp} from "../../store/actions"
import CardTempSimp from "../CardTempSimp/CardTempSimp";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom'
export default function DetailTemp(){

  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTempTheSimp.seasons)

  console.log(tempSimp)

  useEffect(()=>{
    dispatch(getTempSimp())
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
                  <Link to={`/movie/${i.season_number}`}> 
                    <CardTempSimp
                      
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