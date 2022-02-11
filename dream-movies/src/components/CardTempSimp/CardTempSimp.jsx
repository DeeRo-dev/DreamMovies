import React from "react";
import './CardTempSimp.css'

export default function CardTempSimp({ img,estreno,temp}){

 
return(
  <div className="CardTempSimp__ContentCard">
    <div className="CardTempSimp__ContentImg">
      <img src={img} alt="" className="CardTempSimp__Img"/>
    </div>
    
    <h4>Season {temp}</h4>
    <p>{estreno}</p>
  </div>
)
}