import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"
import logo from "../logo/immunax-logo-transparent.png"
import { Stack, HStack, VStack,Box, position, Container } from '@chakra-ui/react'

import { IconButton } from '@chakra-ui/react'
 import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AuthContext } from '../Context/Authcontext'



export default function Navbar() {
 const [menudisplay, setMenudiplay] = useState("none")
 const { authState,loginUser}=useContext(AuthContext)


  return (
    <div>

{/* display={{  sm: 'none', md:"none" }} */}
<Container maxW="100%" className={style.navbar} >
   
        <Box w="50%">
               <img src={logo} alt="" className={style.logo}/>
        </Box>
         
          <Box className={style.menubar} >
                <Link to="/" >Home</Link>
                <Link to="/database" >Database</Link>
                <Link to="/about" >About</Link>
                <Link to="/register" >
                  {
                    authState.isAuth?
                    authState.username
                    :
                    "Register"
                  }
                  
                  
                  </Link>
          
</Box>

</Container>


  <Box 
    pos="absolute" 
    zIndex={50} 
    right="0" 
    top="0" 
    w='100%'
    bg='white'
    display={{sm:{menudisplay},  md: 'none', lg: "none",xl:"none" }}
  >


    {
      menudisplay=="none"?

      <IconButton
      variant='outline'
      colorScheme='teal'
      align="right"
     
   
      icon={<HamburgerIcon />}
      onClick={()=>setMenudiplay("block")} />
      :
      <IconButton
      variant='outline'
      colorScheme='teal'
      align="right"
      icon={<CloseIcon />}
      onClick={()=>setMenudiplay("none")} />
    }
   

</Box>
  <Box display={menudisplay} >


 

      <VStack spacing={4} 
      align='center'
      pos="fixed" 
      top="1px" 
      bg="white" 
      left="0" 
      zIndex={20}
      w="100%"
      h="auto"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      p="4"
      > 





              <Link to="/" >Home</Link>
                <Link to="/database" >Database</Link>
                <Link to="/about" >About</Link>
                <Link to="/register">Register</Link>

          
    </VStack>

</Box>

  

    </div>
  )
}
