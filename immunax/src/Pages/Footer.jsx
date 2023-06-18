import { Box, Container,Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/layout'

import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo/immunax-logo-transparent.png"


export default function Footer() {
  return (
    <div>
    <Container maxW="100%" p="8"  bg='#f1f5ff'>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }} gap={6}>

            <GridItem w='100%' colSpan={3}>
                <Stack spacing={{ base: '6', md: '8' }} align="start">
                    <img src={logo} alt="" width="200px" />
                    <Text color="fg.muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, sit?</Text>
                </Stack>
            </GridItem>

            <GridItem w='100%'>
                <Stack align={'flex-start'}>
                    <Heading as='h4' size='md' color='#1f3e72'>About</Heading>
                    <Link href={'#'}>About Us</Link>
                    <Link href={'#'}>Features</Link>
                    <Link href={'#'}>News & Blogs</Link>
                </Stack>
            </GridItem>


            <GridItem w='100%'>
            <Stack align={'flex-start'}>
                    <Heading as='h4' size='md' color='#1f3e72'>Support</Heading>
                    <Link href={'#'}>About Us</Link>
                    <Link href={'#'}>Features</Link>
                    <Link href={'#'}>News & Blogs</Link>
                </Stack>
            </GridItem>
            <GridItem w='100%'>
            <Stack align={'flex-start'}>
                    <Heading as='h4' size='md' color='#1f3e72'>Company</Heading>
                    <Link href={'#'}>About Us</Link>
                    <Link href={'#'}>Features</Link>
                    <Link href={'#'}>News & Blogs</Link>
                </Stack>
            </GridItem>
                
             
        </Grid>



        <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor="888">
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 Immunax. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
           
          </Stack>
        </Container>
      </Box>

    </Container>

    </div>
  )
}
