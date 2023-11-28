import React from 'react'
import { Navigate } from 'react-router';


const RequiredAuth = ({ children }) => {
    const token = localStorage.getItem("token")
   // console.log(token)
    if (!token ){
        alert("Please Login First")
        return <Navigate to="/login" />;
    }
    
    return children;
    
}

export default RequiredAuth
