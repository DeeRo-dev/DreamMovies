import React from "react";
import './CardCapitulos.css'

export default function CardCapitulos({ img,estreno,temp}){

 
return(
  <div className="CardCapitulos__ContentCard">
    <div className="CardCapitulos__ContentImg">
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="CardCapitulos__Img"/>
    </div>
    
    <h4 className="CardCapitulos__Title">{temp}</h4>
    <p className="CardCapitulos__TitleEstreno">{estreno}</p>
  </div>
)
}