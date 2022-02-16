
import React, {useEffect} from "react"
import {useParams} from 'react-router-dom'
import NavBar  from "../NavBar/NavBar";
import './DetailCapitulos.css'
import { useDispatch, useSelector } from "react-redux";
import {getCapitulo, getTemp} from "../../store/actions"
import CardTemp from "../CardTemp/CardTemp.jsx";
import { Container, Row, Col } from "react-bootstrap";

export default function DetailCapitulos(){
  const dispatch = useDispatch()
  const capitulos = useSelector((state) => state.allCapitulosTheSimp.episodes)
  const { idSerie, idCapitulo } = useParams();
  
/*   console.log("idSerie", idSerie)
  console.log("idCapitulo", idCapitulo) */
  console.log(capitulos);
  useEffect(()=>{
    dispatch(getCapitulo(idSerie, idCapitulo))
  },[dispatch])

  return(
    
    <div className="DetailCapitulos__Content"> 
      <NavBar/>
      <Container fluid  className="DetailCapitulos__Container">
       
          <div className="DetailCapitulos__ContentTitleTemp">
            <h3 className="DetailCapitulos__TitleTemp">Temporadas</h3>
          </div>
          <Container fluid  className="DetailCapitulos__ContentCards">
              {
                capitulos?.map(i =>{
                 
                  return(
                    <div key={i.id}  className="DetailCapitulos__Cards">
                    <CardTemp
                      
                       img={i.still_path}
                       estreno={i.air_date}
                       temp={i.name}
                    />
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