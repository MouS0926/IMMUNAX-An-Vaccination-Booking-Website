import { Box, Center, Container,Grid, GridItem, HStack, Heading, Text } from '@chakra-ui/layout'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import React from 'react'
import prepImg from "../../image/prep.png"
import { BsShieldFillX ,BsFillCheckSquareFill,BsFillHeartFill} from 'react-icons/bs';
import { AiFillCloseSquare } from "react-icons/ai";
import { MdInsertChart } from "react-icons/md";


export default function Preparation() {
  return (
    <div>
    <Container  maxW="80%" p="8" h="auto">

    <Grid 
    templateRows={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={3} >
        <GridItem rowSpan={3} colSpan={1}>
            <img src={prepImg} alt=""  />
        </GridItem>

        <GridItem colSpan={1}rowSpan={1}>
              <Heading color='#1f3e72'>
                 Preparations Before Vaccine
              </Heading>

            <Text color="#888">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vel ab odio, explicabo fuga, necessitatibus repellat inventore distinctio debitis voluptatibus saepe quaerat
                sit corrupti quam nesciunt! Quia eligendi corrupti architecto.
            </Text>
     </GridItem>


        <GridItem colSpan={1} rowSpan={2}>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <HStack>
                            <Center w='30px' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb'>
                              <BsShieldFillX  />
                             </Center>
                              <p style={{color:'#1f3e72',fontWeight:"500"}}>Avoid alcoholic beverages</p> 
                            </HStack>
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <HStack>
                            <Center w='30px' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb'>
                              <AiFillCloseSquare  />
                             </Center>
                              <p style={{color:'#1f3e72',fontWeight:"500"}}>Avoid Stress</p> 
                            </HStack>
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <HStack>
                            <Center w='30px' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb'>
                              <MdInsertChart/>
                             </Center>
                              <p style={{color:'#1f3e72',fontWeight:"500"}}>Eat healthy food</p> 
                            </HStack>
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <HStack>
                            <Center w='30px' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb'>
                              <BsFillCheckSquareFill  />
                             </Center>
                              <p style={{color:'#1f3e72',fontWeight:"500"}}>Get enough sleep</p> 
                            </HStack>
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <HStack>
                            <Center w='30px' h='30px' bg='#f1f5ff' fontSize='15px' color='#2d4dcb'>
                              <BsFillHeartFill  />
                             </Center>
                              <p style={{color:'#1f3e72',fontWeight:"500"}}>Exercise or Physical Activity</p> 
                            </HStack>
                        </Box>

                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>


            </GridItem>
           
            </Grid>


        </Container>


    </div>
  )
}
