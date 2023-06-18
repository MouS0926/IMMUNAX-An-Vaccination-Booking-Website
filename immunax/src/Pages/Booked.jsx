import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/Authcontext'
import { Card, CardBody, Grid, GridItem, Text } from '@chakra-ui/react'
import style from "./Booking.module.css"
import Bookitem from './Bookitem'
import Nobooking from './Nobooking'
import { Spinner } from '@chakra-ui/react'

export default function Booked() {

    const { authState,loginUser}=useContext(AuthContext)
    const [loading,setLoading]=useState(false)
    const[data,setdata]=useState([])


    const fetchBookedData=(useremail)=>{
        setLoading(true)
        fetch(`http://localhost:8080/booking?useremail=${useremail}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setLoading(false)
            setdata(data)
           
        })
    }

    useEffect(()=>{
        fetchBookedData(authState.useremail)
    },[authState.useremail])


if(loading){
   return <div>

<div style={{paddingTop:"100px",margin:"auto" ,width:"100%"}}>
<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  
/>
</div>

    </div>
   
  
}

if(data.length==0){
    return <Nobooking/>
}

  return (
   
    <div>
        <div className={style.bookedDiv}>
        <Grid 
        templateColumns= {{ base: 'repeat(1, 1fr)',sm:'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={6}>
            

            {
                data.map((el)=>(
                    <div key={el.id}>
                        <Bookitem {...el}/>
                    </div>
                    
                ))
            }
           

           
     
        </Grid>
        </div>
    

    </div>
  )
}
