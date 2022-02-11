
import React, {useEffect} from "react"
import NavBar  from "../NavBar/NavBar";
import './DetailTemp.css'
import { useDispatch, useSelector } from "react-redux";
import {getTempSimp} from "../../store/actions"
import CardTempSimp from "../CardTempSimp/CardTempSimp";


export default function DetailTemp(){

  const dispatch = useDispatch()
  const tempSimp = useSelector((state) => state.allTempTheSimp)

  console.log(tempSimp)

  useEffect(()=>{
    dispatch(getTempSimp())
  },[dispatch])

  let info = [{
    img: 'https://i.pinimg.com/564x/e2/69/eb/e269eb756e9619b91a75a336aaa21a66.jpg',
    estreno: '22-22-3233',
    temp:1
    },
    {img: 'https://i.pinimg.com/564x/d7/cf/fd/d7cffde97f05df252bb3c971b15e54f6.jpg',
    estreno: '5-6-5243',
    temp:2}
    ,
   { img: 'https://i.pinimg.com/564x/9e/10/64/9e106470994a6f9d46e5ed8e684c2d9d.jpg',
    estreno: '6-43-2153',
    temp:3
    },
   { img: 'https://i.pinimg.com/564x/80/6d/13/806d13fcba72d062f8e3c406ee156d0f.jpg',
    estreno: '22-22-3233',
    temp:4
   },
   { img: 'https://i.pinimg.com/736x/2c/ee/0f/2cee0fb9c8a4412b19ba7efb7a549b9d.jpg',
    estreno: '2-14-4243',
    temp:5
   },
   { img: 'https://i.pinimg.com/564x/3a/b9/7b/3ab97ba36d76ff8f5b1db00060160c44.jpg',
    estreno: '4-52-3563',
    temp:6
    }]
  return(

    <div>
      <NavBar/>

        <div  className="DetailTemp__Container">
          <div>
            <h3>Tempordas</h3>
          </div>
          <div  className="DetailTemp__ContentCards">
              {
                info?.map(i =>{
                 
                  return(
                    <div key={i.temp}  className="DetailTemp__Cards">
                    <CardTempSimp
                      
                       img={i.img}
                       estreno={i.estreno}
                       temp={i.temp}
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