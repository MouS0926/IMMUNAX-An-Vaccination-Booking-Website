import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

import { Adminauth } from '../Context/Adminauthcontext';

const AdminPrivateRoute = ({children}) => {
    const {authState}=useContext(Adminauth)
        if(!authState.isAuth){
          return  <Navigate to="/adminlogin" replace={false} />
        }
        return children;
    };
export default AdminPrivateRoute;