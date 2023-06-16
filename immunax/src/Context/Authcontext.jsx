import React, { createContext } from 'react'
import { useState } from 'react';

export const AuthContext=createContext()

export default function AuthcontextProvider({ children }) {
  
    const [auth, setAuth] = useState({
        isAuth: false ,username: null
      });

      const handlelogin=(email,password)=>{
        fetch(`http://localhost:8080/user`)
        .then((res)=>{
          return res.json()
        })
        .then((data)=>{
           let userFind=data.find((item)=>{
  
            return item.email===email && item.password===password
           })
         
          
           if(userFind){
            setAuth({...auth, isAuth:true,username:userFind.name})
            alert("You are logged in successfully")
           }
           
  
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  
  
    const handlelogout=()=>{
      setAuth({ isAuth: false ,username: null})
    }
  

    let providerState = {
        authState:auth,
        loginUser:handlelogin,
        logoutUser:handlelogout
    
      };

  return (
  <AuthContext.Provider value={providerState}>
     { children }
  </AuthContext.Provider>
  )
}
