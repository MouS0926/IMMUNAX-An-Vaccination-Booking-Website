import React from 'react'
import { Box, Center, Container,Grid, GridItem, HStack, Heading, Text } from '@chakra-ui/layout'

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


    <GridItem colSpan={1} rowSpan={3} bg="#000">
     </GridItem>

     <GridItem rowSpan={2} colSpan={1} bg="red">
        
    </GridItem>
       
        </Grid>


    </Container>
    </div>
  )
}
