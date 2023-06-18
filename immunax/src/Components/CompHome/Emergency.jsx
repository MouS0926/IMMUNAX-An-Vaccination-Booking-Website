import React from 'react'
import { Box, Center, Container,Grid, GridItem, HStack, Heading, Spacer, Text } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/card'
import { BsFillCameraVideoFill, BsFillChatDotsFill, BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import maledoctor from "../../image/male1.png"


export default function Emergency() {
  return (
    <div>

<Container  maxW="80%" p="8" h="auto">

<Grid 
templateRows={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    gap={3} >
   

    <GridItem colSpan={1} rowSpan={1} >
          <Heading color='#1f3e72'>
             Emergency Contact
          </Heading>

        <Text color="#888">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vel ab odio, explicabo fuga, necessitatibus repellat inventore distinctio debitis voluptatibus saepe quaerat
            sit corrupti quam nesciunt! Quia eligendi corrupti architecto.
        </Text>
 </GridItem>


    <GridItem colSpan={1} rowSpan={3} >

            <img src={maledoctor} alt="male-doctor"  />
     </GridItem>

<GridItem rowSpan={2} colSpan={1}>

    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem w='100%'>
                <Card>
                <CardBody>

                    <HStack spacing='24px'>
                         <Center w='40px' h='40px' bg='#f1f5ff' fontSize='20px' color='#2d4dcb'>
                              <BsFillTelephoneFill  />
                         </Center>
                         <Text color='#1f3e72'fontWeight="bold" fontSize='xl'>Call</Text>
                         
                    </HStack>
                    <br/>
                    <Center w='100%' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb' p={6}>
                        <Text color="#2d4dcb">Call Now</Text>
                    </Center>
                </CardBody>
                </Card>
            </GridItem>

            <GridItem w='100%'>
                <Card>
                <CardBody>

                    <HStack spacing='24px'>
                         <Center w='40px' h='40px' bg='#f1f5ff' fontSize='20px' color='#2d4dcb'>
                              <BsFillChatDotsFill  />
                         </Center>
                         <Text color='#1f3e72'fontWeight="bold" fontSize='xl'>Chat</Text>
                         
                    </HStack>
                    <br/>
                    <Center w='100%' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb' p={6}>
                        <Text color="#2d4dcb">Chat Now</Text>
                    </Center>
                </CardBody>
                </Card>
            </GridItem>
  
    </Grid>


    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem w='100%'>
                <Card>
                <CardBody>

                    <HStack spacing='24px'>
                         <Center w='40px' h='40px' bg='#f1f5ff' fontSize='20px' color='#2d4dcb'>
                              <BsFillCameraVideoFill  />
                         </Center>
                         <Text color='#1f3e72'fontWeight="bold" fontSize='xl'>Video Call</Text>
                         
                    </HStack>
                    <br/>
                    <Center w='100%' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb' p={6}>
                        <Text color="#2d4dcb">Video Call Now</Text>
                    </Center>
                </CardBody>
                </Card>
            </GridItem>

            <GridItem w='100%'>
                <Card>
                <CardBody>

                    <HStack spacing='24px'>
                         <Center w='40px' h='40px' bg='#f1f5ff' fontSize='20px' color='#2d4dcb'>
                              <MdEmail  />
                         </Center>
                         <Text color='#1f3e72'fontWeight="bold" fontSize='xl'>Message</Text>
                         
                    </HStack>
                    <br/>
                    <Center w='100%' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb' p={6}>
                        <Text color="#2d4dcb">Message Now</Text>
                    </Center>
                </CardBody>
                </Card>
            </GridItem>
  
    </Grid>


</GridItem>
       
        </Grid>


    </Container>
    </div>
  )
}
