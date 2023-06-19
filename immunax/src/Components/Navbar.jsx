import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Navbar.module.css"
import logo from "../logo/immunax-logo-transparent.png"
import { Stack, HStack, VStack,Box, position, Container, Flex, MenuButton, MenuList, MenuItem, Menu, Button } from '@chakra-ui/react'

import { IconButton } from '@chakra-ui/react'
 import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AuthContext } from '../Context/Authcontext'
import { FaUserCircle } from "react-icons/fa";


export default function Navbar() {
 const [menudisplay, setMenudiplay] = useState("none")
 const { authState,loginUser,logoutUser}=useContext(AuthContext)


  return (
    <div>

{/* display={{  sm: 'none', md:"none" }} */}
<Container maxW="100%" className={style.navbar} >
   
        <Box w="50%">

          <Link to='/'>
              <img src={logo} alt="" className={style.logo}/>
          </Link>
             
        </Box>
         
          <Box className={style.menubar} >
                <Link to="/" >Home</Link>
                <Link to="/database" >Database</Link>
              
               
                  {
                    authState.isAuth?
                    <>
                    {/* <p><Flex><FaUserCircle />  {authState.username}</Flex></p> */}
                    <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    <Flex><FaUserCircle />&nbsp;  {authState.username}</Flex>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                      <Link to="/booked">Booking Details </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  </>
                    :
                    <Link to="/register" >
                       Register
                    </Link>
                  }
                  
                  {
                    authState.isAuth?
                    <p onClick={logoutUser}>Logout</p>
                    :
                    <Link to="/login">Login</Link>
                  }
              <Link to="/adminlogin">Admin Login</Link>
          
</Box>

</Container>

<Container maxW="100%" className={style.mobileNav}>
<HStack  bg='white'>
    <Link to='/'>
              <img src={logo} alt="" className={style.logo}/>
          </Link>
<Box 
    pos="absolute" 
    zIndex={50} 
    right="0" 
    
    top="0" 
   
   
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



</HStack>
</Container>


  <Box display={menudisplay}>


 

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
      className={style.mobilelist}
      > 





              <Link to="/" >Home</Link>
                <Link to="/database" >Database</Link>
               
                {
                    authState.isAuth?
                    <>
                    {/* <p><Flex><FaUserCircle />  {authState.username}</Flex></p> */}
                    <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    <Flex><FaUserCircle />&nbsp;  {authState.username}</Flex>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>
                      <Link to="/booked">Booking Details </Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  </>
                    :
                    <Link to="/register" >
                       Register
                    </Link>
                  }

{
                    authState.isAuth?
                    <p onClick={logoutUser}>Logout</p>
                    :
                    <Link to="/login">Login</Link>
                  }
            <Link to="/adminlogin" >Admin Login</Link>
          
    </VStack>

</Box>

  

    </div>
  )
}
