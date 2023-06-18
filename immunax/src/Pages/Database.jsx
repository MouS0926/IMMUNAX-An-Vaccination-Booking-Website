import React, { useEffect, useState } from 'react'
import style from './Database.module.css'
import { AbsoluteCenter, Box, Card, CardBody, Center, Divider, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { MdEditCalendar } from 'react-icons/md'
import { GiLoveInjection } from "react-icons/gi";
import img1 from '../image/ev1.jpg'
import img2 from '../image/ev2.jpg'
import Footer from './Footer';

export default function Database() {

  const[data,setdata]=useState([])
  const[vaccinated,setvaccinated]=useState([])
 

  const fetchData=()=>{
   
    fetch(`http://localhost:8080/booking`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
     
        setdata(data)
       
    })
}
useEffect(()=>{
  fetchData()
},[])


const vacinatedData=(status)=>{
   
  fetch(`http://localhost:8080/booking?status=true`)
  .then((res)=>{
      return res.json()
  })
  .then((data)=>{
   
      setvaccinated(data)
     
  })
}

useEffect(()=>{
  vacinatedData()
},[])



  return (
    <div>
        <div className={style.datadiv}>
          <Grid 
          templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}}
           gap={6}>
              
            <GridItem w='100%'>

              <Card bg="#bcc7ef">
              <CardBody>

                 <Center w='40px' h='40px' fontSize="30px" bg='#0c2687' color='white'>
                   <MdEditCalendar/>
                </Center>
                <br/>       
                  <Heading as='h4' size='md'>
                 Total Registration : &nbsp;{data.length}
                </Heading>

                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
              </CardBody>
            </Card> 

          </GridItem>

          <GridItem w='100%'>

              <Card bg="#bcc7ef">
              <CardBody>

                 <Center w='40px' h='40px' fontSize="30px" bg='#0c2687' color='white'>
                   <GiLoveInjection/>
                </Center>
                <br/>       
                  <Heading as='h4' size='md'>
                Total Vaccinated : &nbsp;{vaccinated.length}
                </Heading>

                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
              </CardBody>
            </Card> 

          </GridItem>

    

          </Grid>

<br/><br/>
    

    <Box position='relative' padding='10'>
      <Divider />
      <AbsoluteCenter bg='#031962' px='5' color="#fff">
          <Heading as='h4' size='md'>
            Upcoming Events
        </Heading>
      </AbsoluteCenter>
    </Box>
      <Grid 
          templateColumns={{base:'repeat(1, 1fr)',sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}}
           gap={6}>
              
            <GridItem w='100%'>

              <Card bg="#bcc7ef">
              <CardBody>
              <Image
                src={img1}
                alt='event1'
                borderRadius='lg'
                h="200px"
              w="100%"
              objectFit="cover"
              />
                
                <br/>       
                  <Heading as='h4' size='md'>
                  National Conference On Food And Nutrition Security
                </Heading>

                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellendus
                   sapiente ratione non est adipisci. At quis mollitia ex delectus.</Text>
              </CardBody>
            </Card> 

          </GridItem>


          <GridItem w='100%'>

            <Card bg="#bcc7ef">
            <CardBody>
            <Image
              src={img2}
              alt='event1'
              borderRadius='lg'
              h="200px"
              w="100%"
              objectFit="cover"
            />
              
              <br/>       
                <Heading as='h4' size='md'>
             World Health day Event
              </Heading>

              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellendus
                sapiente ratione non est adipisci. At quis mollitia ex delectus.</Text>
            </CardBody>
            </Card> 

          </GridItem>



          <GridItem w='100%'>

            <Card bg="#bcc7ef">
            <CardBody>
            <Image
              src={img1}
              alt='event1'
              borderRadius='lg'
              h="200px"
              w="100%"
              objectFit="cover"
            />
              
              <br/>       
                <Heading as='h4' size='md'>
              Events Caption
              </Heading>

              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellendus
                sapiente ratione non est adipisci. At quis mollitia ex delectus.</Text>
            </CardBody>
            </Card> 

          </GridItem>
       

    

          </Grid>


        </div>

    <Footer/>
    </div>
  )
}
