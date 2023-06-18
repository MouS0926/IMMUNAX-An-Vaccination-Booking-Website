import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Database from '../Pages/Database'
import About from '../Pages/About'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Booking from '../Pages/Booking'
import PrivateRoute from './Privateroutes'
import Booked from '../Pages/Booked'
import Adminlogin from '../Pages/Adminlogin'
import Adminalldata from '../Pages/Adminalldata'
import AdminPrivateRoute from './AdminPrivateRoute'

export default function Allroutes() {
  return (
    <div>
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/database' element={<Database/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login'  element={<Login/>} />
                <Route path='/booking'  element={
                <PrivateRoute>
                  <Booking/>
              </PrivateRoute>
                
                } />

                <Route path='/booked'  element={
                <PrivateRoute>
                  <Booked/>
              </PrivateRoute>
                
                } />

              <Route path='/adminlogin'  element={<Adminlogin/>} />
              <Route path='/userdata'  element={
              <AdminPrivateRoute>
                 <Adminalldata/>
              </AdminPrivateRoute>
              
              } />
           </Routes>
        
    </div>
  )
}
