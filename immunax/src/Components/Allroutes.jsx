import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Database from '../Pages/Database'
import About from '../Pages/About'
import Register from '../Pages/Register'

export default function Allroutes() {
  return (
    <div>
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/database' element={<Database/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/register' element={<Register/>} />
           </Routes>

    </div>
  )
}
