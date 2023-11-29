import React, { Children } from 'react'
import { Navigate } from 'react-router'

function LoginAuth({children}) {
    const token = localStorage.getItem('token')
   
    if(token){
        return <Navigate to="/" />
    }
   return children
}

export default LoginAuth
