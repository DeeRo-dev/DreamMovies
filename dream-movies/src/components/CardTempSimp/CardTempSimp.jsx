import React from "react";
import './CardTempSimp.css'

export default function CardTempSimp({ img,estreno,temp}){

 
return(
  <div className="CardTempSimp__ContentCard">
    <div className="CardTempSimp__ContentImg">
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="CardTempSimp__Img"/>
    </div>
    
    <h4 className="CardTempSimp__Title">{temp}</h4>
    <p className="CardTempSimp__TitleEstreno">{estreno}</p>
  </div>
)
}