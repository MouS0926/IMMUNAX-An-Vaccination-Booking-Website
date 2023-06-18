import React from 'react'
import Hero from '../Components/CompHome/Hero'
import Logosection from '../Components/CompHome/Logosection'
import Navbar from '../Components/Navbar'
import Whyshould from '../Components/CompHome/Whyshould'
import Preparation from '../Components/CompHome/Preparation'
import Emergency from '../Components/CompHome/Emergency'
import Footer from './Footer'




export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Logosection/>
      <Whyshould/>
      <Preparation/>
      <Emergency/>
    <Footer/>
    </div>
  )
}
