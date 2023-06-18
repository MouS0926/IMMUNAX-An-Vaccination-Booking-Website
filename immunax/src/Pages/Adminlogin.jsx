import React, { useContext, useState } from 'react'
import style from './Adminlogin.module.css'
import {Button, FormControl, FormLabel,Heading,Input} from '@chakra-ui/react'
import Adminauthcontext, { Adminauth } from '../Context/Adminauthcontext'
import { Navigate } from 'react-router-dom'

export default function Adminlogin() {
    const { authState,loginUser,logoutUser}=useContext(Adminauth)

    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })

    const handlesubmit=(e)=>{
        e.preventDefault()
        loginUser(formdata.email,formdata.password)
     
    }

    if(authState.isAuth){
  
        return <Navigate to="/userdata"/>
      }
    


    console.log(authState.isAuth)
    console.log(formdata);

  return (
    <div>

     <div className={style.container}>

        <form action="" class={style.formdiv} onSubmit={handlesubmit}>
        <Heading as='h4' size='md' align="center">
                Admin Login
        </Heading>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' placeholder='Enter Your Email' value={formdata.email}  
                    onChange={(e)=>setformdata({...formdata,email:e.target.value})} />
        </FormControl>

        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='password' placeholder='Enter Your Password' value={formdata.password} 
                    onChange={(e)=>setformdata({...formdata,password:e.target.value})}/>
        </FormControl>

        <Button mt={4}type='submit' width="100%" bg="#3252d0" 
        color="#fff" 
         _hover={{
                  bg: '#3252d0',
                }}>
            Submit
          </Button>
        </form>
     </div>


    </div>
  )
}
