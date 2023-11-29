import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useGetUser from '../customHook/useGetUser';


const RequiredAuth = ({ children }) => {
   const navigate = useNavigate()
   const {service} = useGetUser();
 
   useEffect(()=>{
    if(service.status=="error"){
        navigate("/login")
    }else{
        navigate("/dashboard")
    }
   },[service.status])
    
    
    if(service.isLoading){
        return <div>Loading</div>
    }
    
    return <> {children} </>
}

export default RequiredAuth
