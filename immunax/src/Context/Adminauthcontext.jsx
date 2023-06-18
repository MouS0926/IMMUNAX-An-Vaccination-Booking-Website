import React, { createContext, useState } from 'react'
import { Navigate } from 'react-router-dom';


export const Adminauth=createContext()

export default function Adminauthcontext({ children }) {
    const [adminauth, setadminAuth] = useState({
        isAuth: false ,username: null,useremail:null
      });


      const handlelogin=(email,password)=>{
        fetch(`http://localhost:8080/admin`)
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
           let userFind=data.find((item)=>{
  
            return item.email===email && item.password===password
           })
         
          
           if(userFind){
            setadminAuth({...adminauth, isAuth:true,username:userFind.username,useremail:userFind.email})
            alert("You are logged in successfully")
           }
           
  
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    

      const handlelogout=()=>{
        setadminAuth({ isAuth: false ,username: null})
      
      }

      let providerState = {
        authState:adminauth,
        loginUser:handlelogin,
        logoutUser:handlelogout
    
      };

   

  return (
    <Adminauth.Provider value={providerState}>
        { children }
    </Adminauth.Provider>
  )
}
