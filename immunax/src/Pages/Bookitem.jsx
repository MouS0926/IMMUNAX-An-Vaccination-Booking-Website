import { Button, Card, CardBody, Divider, Flex, GridItem, Heading, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs';
import { FaUserCircle, IconName } from "react-icons/fa";
import { MdPending } from 'react-icons/md';

export default function Bookitem({name,age,date,gender,location,vaccine_type,status,useremail}) {
  return (
    <div>

            <GridItem w='100%'>
             <Card bg="#ebedf9">
                <CardBody>
                    <Flex>
                       <Text color="#263e9d" fontSize="30px"> <FaUserCircle /></Text> &nbsp;
                        <Heading as='h4' size='md' color="#322f2f" > {name} </Heading>
                    </Flex>
                    <Divider /> <br/>
                    <Flex>
                        <Heading as='h5' size='sm' color="#0c1c58">Age:&nbsp; </Heading>
                        <Heading as='h5' size='sm' color="#322f2f" > {age} </Heading>
                    </Flex>
                    <Flex>
                        <Heading as='h5' size='sm' color="#0c1c58">Vaccination Date:&nbsp; </Heading>
                        <Heading as='h5' size='sm' color="#322f2f" > {date} </Heading>
                    </Flex>

                    <Flex>
                        <Heading as='h5' size='sm' color="#0c1c58">Gender:&nbsp; </Heading>
                        <Heading as='h5' size='sm' color="#322f2f" > {gender} </Heading>
                    </Flex>
                    <Flex>
                        <Heading as='h5' size='sm' color="#0c1c58">Applicant's Location:&nbsp; </Heading>
                        <Heading as='h5' size='sm' color="#322f2f" > {location} </Heading>
                    </Flex>

                    <Flex>
                        <Heading as='h5' size='sm' color="#0c1c58">Vaccination Type:&nbsp; </Heading>
                        <Heading as='h5' size='sm' color="#322f2f" > {vaccine_type} </Heading>
                    </Flex>

                    <br/>
                    <Flex>
                       
                        <Heading as='h5' size='sm' color="#322f2f" >
                            
                            {
                             
                             status
                                ?
                                <Button  size='sm' colorScheme='green'><BsShieldFillCheck/>Vaccinated</Button>
                          
                                :
                                
                                <Button  size='sm' colorScheme='orange'><MdPending/>Pending</Button>
                            }
                             
                        </Heading>
                    </Flex>

                
                    
                </CardBody>
                </Card>
            </GridItem>
    </div>
  )
}
