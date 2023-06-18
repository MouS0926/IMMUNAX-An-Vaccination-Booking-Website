import { Button, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { Badge } from '@chakra-ui/react'


export default function UserRow({id,name,age,gender,useremail,location,date,vaccine_type,status,handleToggle}) {
 
    function toggledata(){

        handleToggle(
            {id,name,age,gender,useremail,location,date,vaccine_type,status:!status},id)
        // console.log(id,title,status);
      }
    return (
    <>
                <Tr>
                  <Td>{id} </Td>
                  <Td>{name} </Td>
                  <Td>{age}  </Td>
                  <Td>{gender}  </Td>
                  <Td>{useremail}  </Td>
                  <Td>{location}  </Td>
                  <Td>{date}</Td>
                  <Td>{vaccine_type}  </Td>
                  <Td>{
                  status
                  ? 
                  <Badge variant='solid' colorScheme='green'>
                         Vaccinated
                    </Badge>
                 
                  :
                  <Badge variant='solid' colorScheme='orange'>
                         Pending
                    </Badge>
                  }  
                  
                  </Td>
                  <Td>
                    <Button colorScheme='teal' size='xs' onClick={toggledata}>
                         Change status
                    </Button>


                  </Td>
                </Tr>

    </>
  )
}
