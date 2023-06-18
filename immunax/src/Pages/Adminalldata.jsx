import React, { useContext, useEffect, useState } from 'react'
import style from './Adminlogin.module.css'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
} from '@chakra-ui/react'
import UserRow from './UserRow'
import { Adminauth } from '../Context/Adminauthcontext'
import { Navigate } from 'react-router-dom'


export default function Adminalldata() {

  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [total,settotal]=useState([])

  let [page,setPage]=useState(1)


  const { authState,loginUser,logoutUser}=useContext(Adminauth)
 


  const totaldata=()=>{
   

    fetch(`http://localhost:8080/booking`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
     settotal(data)
    })
  }
  useEffect(()=>{
    totaldata()
  },[])

  console.log(total.length);

  const fetchbookdata=()=>{
    setLoading(true)

    fetch(`http://localhost:8080/booking?_limit=3&_page=${page}`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setLoading(false)
      setData(data)
    })
  }

  useEffect(()=>{
    fetchbookdata(page)
  },[page])

  let limitPage=Math.ceil(total.length/3)

  console.log(data);


  let handleToggle=(newObj,id)=>{

    fetch(`http://localhost:8080/booking/${id}`,{
       method:"PUT",
       headers:{
         "Content-type":"application/json"
       },
       body:JSON.stringify(newObj)
     })
     .then(()=>{
      fetchbookdata(page=1)
     })
   }



if(loading){
  return <h1>Loading....</h1>
}


  return (
    <div>
    
          <div className={style.datacontainer}>
          <Heading align="center">Booking Details</Heading>
          <br/>
            <TableContainer>
            <Table variant='striped' colorScheme='teal'>
             
              <Thead>
                <Tr>
                  <Th>Sl No</Th>
                  <Th>Name</Th>
                  <Th>Age</Th>
                  <Th>Gender</Th>
                  <Th>Email</Th>
                  <Th>Location</Th>
                  <Th>Vaccination Date</Th>
                  <Th>vaccine Type</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                
                </Tr>
              </Thead>
              <Tbody>
               {
                data.map((item)=>(
                 
                  <UserRow key={item.id} {...item} handleToggle={handleToggle} />
                 
                 
                ))
               }
              
              </Tbody>
              
            </Table>
          </TableContainer>

                {
                  page==1?
                  <Button 
                  bg="#3252d0"
                  color="#fff"
                  size='xs'
                  onClick={()=>setPage(page-1)} 
                isDisabled

                  >Prev</Button>
                  :
                  <Button 
                  bg="#3252d0"
                  color="#fff"
                  size='xs'
                    onClick={()=>setPage(page-1)} 
                  
                >Prev</Button>
                }
       

                  {page}



              {
                page==limitPage
                ?
                <Button 
                bg="#3252d0"
                color="#fff"
                size='xs'
                isDisabled
              onClick={()=>setPage(page+1)}>Next</Button>
              :
              <Button 
              bg="#3252d0"
              color="#fff"
              size='xs'
              onClick={()=>setPage(page+1)}>Next</Button>
              }               
          </div>


    </div>
  )
}
