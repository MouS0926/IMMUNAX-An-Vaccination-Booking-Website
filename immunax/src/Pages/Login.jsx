import { Box, Button, Container, Divider, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'
import style from './Register.module.css'


export default function Login() {
const { authState,loginUser,logoutUser}=useContext(AuthContext)

    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })

const handlesubmit=(e)=>{
    e.preventDefault()
    loginUser(formdata.email,formdata.password)
    console.log(authState.isAuth)
}


if(authState.isAuth){
  
    return <Navigate to="/"/>
  }

  return (
    <div>
    <Container width="100%" p={10}>
    <Box className={style.registForm}>

    <Heading as='h4' size='md' align="center">
     Login Here
    </Heading>


        <form action=""  width="50%" onSubmit={handlesubmit}>
            <FormControl >
                    <FormLabel>Your Email</FormLabel>
                    <Input type='email' name='email' value={formdata.email}  
                    onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
                    
            </FormControl>

            <FormControl>
                    <FormLabel>Your Password</FormLabel>
                    <Input type='password' name='password' value={formdata.password} 
                    onChange={(e)=>setformdata({...formdata,password:e.target.value})} />
                    
            </FormControl>

            <Button
            mt={4}
            colorScheme='teal'
           type='submit'
           width="100%"
          >
            Login
          </Button>
          <br/><br/>
          <Divider orientation='horizontal' />
         </form>
         </Box>
        </Container>

    </div>
  )
}
