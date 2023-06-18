import {  Button, Divider, Heading, Input, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import style from "./Booking.module.css"
import { FormControl,FormLabel } from '@chakra-ui/react'

import logo from "../logo/white-200.png"
import Footer from './Footer'
import { AuthContext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'



export default function Booking() {

const { authState,loginUser}=useContext(AuthContext)
const [formstate,setFormstate]=useState({
  
    name: "",
    age:"" ,
    date: "",
    gender: "",
    location: "",
    vaccine_type: "",
    status: false,
    useremail:authState.useremail
})

const handlechange=(e)=>{

  const{name, value} =e.target
  setFormstate({...formstate,
  [name]:value
  })
}

const handleSubmit=(e)=>{
  e.preventDefault()

  fetch(`https://immunax-api.onrender.com/booking`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(formstate)
  })

  setFormstate({
    name: "",
    age:"" ,
    date: "",
    gender: "",
    location: "",
    vaccine_type: "",
    status: false
  })
  alert("Your Booking for vaccination is successfully done!")
  e.target.reset();
  
}
console.log(formstate);

const {name,age,date,gender,location,vaccine_type,status}=formstate

  return (
    <>
    <div>
      
        <div className={style.bookingdiv}>
                <div className={style.imageDiv}>
                <img src={logo} alt="" />

                </div>

                <div className={style.formDiv}>


                <Heading as='h4' size='md' align="center" color='#3252d0' p={3}>
                 Book Your Slot
              </Heading>
                <Divider/>

             
                    <form action="" width="100%" onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Your Full Name</FormLabel>
                        <Input type='text'placeholder="Enter Your Full Name" name="name" value={name} onChange={handlechange} />
                     </FormControl>

                     <FormControl>
                        <FormLabel>Age</FormLabel>
                        <Input type='text'placeholder="Enter Your Age" name="age" value={age} onChange={handlechange} />
                     </FormControl>

                     <FormControl>
                        <FormLabel>Select date</FormLabel>
                        <Input type='date'placeholder="Enter Your Age" name="date" value={date} onChange={handlechange} />
                     </FormControl>


            
                     <FormControl>
                        <FormLabel>Your Location</FormLabel>
                        <Input type='text'placeholder="Enter Your Location" name="location"  value={location} onChange={handlechange}/>
                     </FormControl>

                     <FormControl>
                     <FormLabel>Choose Your Vaccine Type</FormLabel>
                       <Select name="vaccine_type" id="" value={vaccine_type} onChange={handlechange}>
                            <option value="Novavax">Novavax</option>
                            <option value="Nuvaxovid">Nuvaxovid</option>
                            <option value="COVOVAX">COVOVAX</option>
                       </Select>
                       </FormControl>
                      
                       
          
          <Stack direction='row'>
            <div>
              <input type="radio"  name="gender" id="male" value="Male" onChange={handlechange}
               checked={gender=="Male"}  />
              <label>Male</label>
            </div>

          <div>
            <input type="radio"  name="gender" id="female" value="Female" checked={gender=="Female"} onChange={handlechange}/>
            <label>Female</label>
          </div>

          <div>
            <input type="radio"  name="gender" id="others" value="Others" checked={gender=="Others"} onChange={handlechange}/>
            <label>Others</label>
          </div>

 
          </Stack>




<br/>
                        <Button
                        w="100%"
                      bg="#4461d5"
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type='submit'
                      >
                Submit
              </Button>
                        
 

 

                 </form>

                </div>
        </div>


    </div>

    <Footer/>

    </>
  )
}
