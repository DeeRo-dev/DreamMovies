import React from "react";


export default function CardTempSimp({ img,estreno,temp}){

 

return(
  <div>
    <img src={img} alt="" />
    <h4>Season {temp}</h4>
    <p>{estreno}</p>
  </div>
)
}