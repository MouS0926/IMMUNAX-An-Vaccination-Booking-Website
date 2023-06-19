import { Input,Container, Button, Divider, Box, Heading,} from '@chakra-ui/react';
import { useState } from 'react';
import {
    FormControl,
    FormLabel,

  } from '@chakra-ui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import style from './Register.module.css'
import Footer from './Footer';



  export default function Register() {

const [inputVal,setinputval]=useState({
  email: "", 
  password: "",
  name:""
})

let {email,password,name}=inputVal

const handlechange=(e)=>{
  const {name,value}=e.target
  setinputval({...inputVal,
  [name]:value
  })
}


console.log(inputVal);


const navigate = useNavigate();


const submitt=(inputVal)=>{
  fetch(`https://immunax-api.onrender.com/user`)
  .then((res)=>{
    return  res.json()
  })
  .then((data)=>{
    let found=false
    data.forEach((el) => {
      if (el.email == inputVal.email) {
          found = true
      }
  })

  if (found) {
      alert("Email already exist")
  } else {
      register(inputVal)
      alert("Registered Successfully")
      navigate("/login");
  }
  })



  function register(inputVal){
    fetch(`https://immunax-api.onrender.com/user`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(inputVal
      )
    })
    }
  }


const submitData=(e)=>{
  e.preventDefault()
  submitt(inputVal)
  

 
  setinputval({
    email: "", 
    password: "",
    name:""
  })
  e.target.reset();
 
 
  
}


  return (

   <>

   <Container width="100%" p={10}>
    <Box className={style.registForm}>

    <Heading as='h4' size='md' align="center">
     Register Here
    </Heading>


    <form action=""  onSubmit={submitData}>
      <FormControl isRequired>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder='First name' name="name" value={name} onChange={handlechange} />
      </FormControl>

      <FormControl isRequired>
        <FormLabel> Email</FormLabel>
        <Input placeholder='Enter Your Email' name="email" type='email' onChange={handlechange}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='Enter Your Password' name="password" type='password' onChange={handlechange}/>
      </FormControl>

      <Button
            mt={4}
            colorScheme='teal'
           type='submit'
           width="100%"
          >
            Submit
          </Button>
          <br/><br/>
          <Divider orientation='horizontal' />
        Already Registered? <Link to="/login">Login</Link>
   </form>

    </Box>

   </Container>
  <Footer/>
   </>


    );
  }