import { Center, Container, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/react'
import { BsShieldFillCheck ,BsBorderStyle} from 'react-icons/bs';
import { FaUsers } from "react-icons/fa";
import { HiPresentationChartLine } from "react-icons/hi";
import React from 'react'

export default function Whyshould() {
  return (
    <div>

<Container  maxW="80%" p="8">


      <Grid 
      templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
       gap={6} p={10}>
        <GridItem w='100%'>

          <Heading color='#1f3e72'>
            Why shoild I vaccine?
          </Heading>
          <Text color="#888">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vel ab odio, explicabo fuga, necessitatibus repellat inventore distinctio debitis voluptatibus saepe quaerat
             sit corrupti quam nesciunt! Quia eligendi corrupti architecto.
          </Text>

        </GridItem>
      
      </Grid>



        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={3}>
            
              <GridItem w='100%'  >
                <Card >
                  <CardBody>
                  
                    <Stack>
                        <Center w='50px' h='50px' bg='#f1f5ff' fontSize='25px' color='#2d4dcb'>
                           <BsBorderStyle  />
                        </Center>
                      <Heading size='md'color="#1f3e72">Minimize the spread of Virus</Heading>
                      <Text color="#888">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque rem sed eius 
                     accusantium. 
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>

               </GridItem>

               <GridItem w='100%'  >
                <Card >
                  <CardBody>
                  
                    <Stack>
                        <Center w='50px' h='50px' bg='#f1f5ff'  color='#2d4dcb' fontSize='25px'>
                           <BsShieldFillCheck  />
                        </Center>
                      <Heading size='md'color="#1f3e72">Forming Antibodies</Heading>
                      <Text color="#888">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque rem sed eius 
                     accusantium. 
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>

               </GridItem>


               <GridItem w='100%'  >
                <Card >
                  <CardBody>
                  
                    <Stack>
                        <Center w='50px' h='50px' bg='#f1f5ff' color='#2d4dcb' fontSize='25px'>
                           <FaUsers  />
                        </Center>
                      <Heading size='md'color="#1f3e72">Protecting People Nearby</Heading>
                      <Text color="#888">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque rem sed eius 
                     accusantium. 
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>

               </GridItem>



               <GridItem w='100%'  >
                <Card >
                  <CardBody>
                  
                    <Stack>
                        <Center w='50px' h='50px' bg='#f1f5ff' color='#2d4dcb' fontSize='25px'>
                           <HiPresentationChartLine />
                        </Center>
                      <Heading size='md'color="#1f3e72">Creating group immunity</Heading>
                      <Text color="#888">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque rem sed eius 
                     accusantium. 
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>

               </GridItem>


           </Grid>
    </Container>
           

    </div>
  )
}
