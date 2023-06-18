import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';

const PrivateRoute = ({children}) => {
    const {authState}=useContext(AuthContext)
        if(!authState.isAuth){
          return  <Navigate to="/login" replace={false} />
        }
        return children;
    };

    export default PrivateRoute;