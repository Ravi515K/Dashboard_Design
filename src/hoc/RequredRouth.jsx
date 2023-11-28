import React from 'react'
import { Navigate } from 'react-router';


const RequiredAuth = ({ children }) => {
    const token = localStorage.getItem("token")
   // console.log(token)
    if (!token ){
        return <Navigate to="/login" />;
    }
    
    return children;
    
}

export default RequiredAuth
