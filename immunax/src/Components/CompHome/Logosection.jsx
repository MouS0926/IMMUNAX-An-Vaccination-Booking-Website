import React, { Fragment } from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/react'
import logo1 from '../../image/l2.png'
import logo2 from '../../image/l3.png'
import style from "../CompHome/Home.module.css"


export default function Logosection() {
  return (
    <div>
       <Fragment>
       <Container maxW="80%" className={style.logosection} >
            <Grid  templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={6}>
                            <GridItem w='100%' >
                                    <img src={logo2} alt="" />
                            </GridItem>
                            <GridItem w='100%' >
                                    <img src={logo2} alt="" />
                            </GridItem>
                            <GridItem w='100%' >
                                    <img src={logo2} alt="" />
                            </GridItem>
                            <GridItem w='100%' >
                                    <img src={logo2} alt="" />
                            </GridItem>
                           
                </Grid>
        </Container>
       </Fragment>
   
           

    </div>
  )
}
