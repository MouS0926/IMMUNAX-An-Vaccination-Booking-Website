import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"
import logo from "../logo/immunax-logo-transparent.png"
import { Stack, HStack, VStack,Box, position } from '@chakra-ui/react'

import { IconButton } from '@chakra-ui/react'
 import { HamburgerIcon } from '@chakra-ui/icons'



export default function Navbar() {
 const [menudisplay, setMenudiplay] = useState("none")

  return (
    <div>

{/* display={{  sm: 'none', md:"none" }} */}


  <Box w='100%' className={style.navbar} >
            <img src={logo} alt="" className={style.logo}/>
            <Link to="/" >Home</Link>
            <Link to="/database" >Database</Link>
            <Link to="/about" >About</Link>
</Box>

  <Box 
    pos="absolute" 
    zIndex={50} 
    right="0" 
    top="0" 
    display={{  md: 'none', lg: "none",xl:"none" }}
  >
    <IconButton
      variant='outline'
      colorScheme='teal'
      align="right"
      icon={<HamburgerIcon />}
      onClick={()=>setMenudiplay("block")}
            />

</Box>
  <Box display={menudisplay}>


 

      <VStack spacing={4} 
      align='center'
      pos="fixed" 
      top="0" 
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

          
    </VStack>

</Box>

  

    </div>
  )
}
