import React from 'react'
import {FiLogOut} from 'react-icons/fi'
import useGetUser from '../customHook/useGetUser'
import useLogout from '../customHook/useLogout'
function Profile() {
    const {cacheUserData} = useGetUser()
    const {mutation} = useLogout()
    const handleLogout = () => {
       
        mutation.mutate()
    }
    return (
        <div className='profile mt-[150px] ml-[-30px] hidden lg:block'>
            <div className='flex justify-center'>
                 <img className='w-50 h-50 rounded-full' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'/>
            </div>
            <h1 className='font-semibold flex justify-center'>{cacheUserData?.name}</h1>
            <p className='text-10 text-brown flex justify-center'>{cacheUserData?.email}</p>
            <div className='flex mt-10 justify-center'>
               <FiLogOut className='mt-1 '/>
                <h2 className='font-semibold ml-6 cursor-pointer' onClick={handleLogout} >Log Out</h2>
            </div>
        </div>
    )
}

export default Profile
