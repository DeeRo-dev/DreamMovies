
import React, {useEffect} from "react"

import { useDispatch, useSelector } from "react-redux";
import {getTempSimp} from "../../store/actions"


export default function DetailTemp(){

  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTempTheSimp)

  console.log(tempSimp)

  useEffect(()=>{
    dispatch(getTempSimp())
  },[dispatch])

  return(

    <div>
      <h1>Hola</h1>


    </div>

  )
}