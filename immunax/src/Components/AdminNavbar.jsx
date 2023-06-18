import { Box, Button, Container, HStack, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import style from './Adminnav.module.css'
import { Adminauth } from '../Context/Adminauthcontext'

export default function AdminNavbar() {

    const { authState,loginUser,logoutUser}=useContext(Adminauth)
    if(authState.isAuth==false){
        <Navigate to="/" />
    }
  return (
    <div>
            <div className={style.container}>
                   
                            <Heading as='h4' size='md'>
                                Admin Panel
                            </Heading>
                           <Button onClick={logoutUser}>Logout</Button>
                        

            </div>

    </div>
  )
}
