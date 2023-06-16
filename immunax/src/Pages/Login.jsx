import { Button, Container, Divider, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'

export default function Login() {
const { authState,loginUser}=useContext(AuthContext)

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
        <Container width="100%" padding="100px 0px">
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
          >
            Login
          </Button>
          <br/><br/>
          <Divider orientation='horizontal' />
         </form>
        </Container>

    </div>
  )
}
