
import React, {useEffect} from "react"
import NavBar  from "../NavBar/NavBar";
import './DetailTemp.css'
import { useDispatch, useSelector } from "react-redux";
import {getTempSimp} from "../../store/actions"
import CardTempSimp from "../CardTempSimp/CardTempSimp";


export default function DetailTemp(){

  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTempTheSimp.seasons)

  console.log(tempSimp)

  useEffect(()=>{
    dispatch(getTempSimp())
  },[dispatch])

  return(

    <div>
      <NavBar/>

        <div  className="DetailTemp__Container">
          <div className="DetailTemp__ContentTitleTemp">
            <h3 className="DetailTemp__TitleTemp">Temporadas</h3>
          </div>
          <div  className="DetailTemp__ContentCards">
              {
                tempSimp?.map(i =>{
                 
                  return(
                    <div key={i.id}  className="DetailTemp__Cards">
                    <CardTempSimp
                      
                      //  img={i.img}
                       estreno={i.air_date}
                       temp={i.name}
                    />
                    </div>
                  )
                }
            
                  )
              }
           
          </div>
        </div>
    </div>

  )
}