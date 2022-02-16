import React from "react";
import './CardTemp.css'

export default function CardTemp({ img,estreno,temp}){

 
return(
  <div className="CardTemp__ContentCard">
    <div className="CardTemp__ContentImg">
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="" className="CardTemp__Img"/>
    </div>
    
    <h4 className="CardTemp__Title">{temp}</h4>
    <p className="CardTemp__TitleEstreno">{estreno}</p>
  </div>
)
}