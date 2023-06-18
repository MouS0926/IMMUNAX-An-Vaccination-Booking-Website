import { Button, Card, CardBody, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./Booking.module.css"
import { MdHourglassEmpty } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Nobooking() {
  return (
    <div>
            <div className={style.bookedDiv}>
                <Card>
                <CardBody>
                <Heading as='h4' size='md'>
                 <MdHourglassEmpty/> &nbsp;  You have not booked any date yet
              </Heading>

              To Book You Slot Click here:
              <Button>
                <Link to="/booking">Click Here</Link>
              </Button>
                   
                </CardBody>
                </Card>
        </div>
    </div>
  )
}
