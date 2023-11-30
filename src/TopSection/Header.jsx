import React from 'react'
import { AiOutlineNumber, AiFillMessage, AiFillBell } from 'react-icons/ai'
import useGetUser from '../customHook/useGetUser'
function Header() {
   // const {cacheUserData} = useGetUser()
    return (
        <div className='flex p-2 mb-5'>
            <div className='flex w-1/4 ml-10'>
                <div className='mr-4 mt-2'>
                    <AiOutlineNumber />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Niond</h1>
                </div>
            </div>
            <div className=' w-2/4 justify-start'>
                <h1 className='text-xl font-bold'>Dashboard</h1>
                <p className='text-brown text-sm'>4th August 2023</p>
            </div>
            <div className='flex w-1/4'>
                <div className='flex w-50 h-50 border-solid border-2 border-#D4D6D7 rounded-lg justify-center items-center mr-2'><AiFillMessage /></div>
                <div className='flex w-50 h-50 border-solid border-2 border-#D4D6D7 rounded-lg justify-center items-center mr-2'><AiFillBell /></div>
                <div className='flex  justify-between'>
                    <div className='mr-2'>
                        <img className='w-50 h-50 rounded-full' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww' />
                    </div>
                    <div className='text-center grid items-center'>
                        <h1 className='text-15 font-bold'>{""}</h1>
                        <p className='text-sm text-brown'>{""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

// import React from 'react'
// import { AiOutlineNumber, AiFillMessage, AiFillBell } from 'react-icons/ai'

// function Header() {
//     return (
//         <div className='flex p-2 mb-5'>
//             <div className='flex w-1/4 ml-10'>
//                 <div className='mr-4 mt-2'>
//                     <AiOutlineNumber />
//                 </div>
//                 <div>
//                     <h1 className='text-xl font-bold'>Niond</h1>
//                 </div>
//             </div>
            
//             {/* For large screens, show the Dashboard div */}
//             <div className='hidden lg:block w-2/4 justify-left'>
//                 <h1 className='text-xl font-bold'>Dashboard</h1>
//                 <p className='text-brown text-sm'>4th August 2023</p>
//             </div>
            
//             <div className='flex w-14'>
//                 <div className='flex w-50 h-50 border-solid border-2 border-#D4D6D7 rounded-lg justify-center items-center mr-2'>
//                     <AiFillMessage />
//                 </div>
//                 <div className='flex w-50 h-50 border-solid border-2 border-#D4D6D7 rounded-lg justify-center items-center mr-2'>
//                     <AiFillBell />
//                 </div>
                
//                 {/* For medium screens, hide this div */}
//                 <div className='hidden md:flex justify-between'>
//                     <div className='mr-2'>
//                         <img
//                             className='w-50 h-50 rounded-full'
//                             src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'
//                             alt="User Profile"
//                         />
//                     </div>
//                     <div className='text-center grid items-center'>
//                         <h1 className='text-15 font-bold'>Nora Watson</h1>
//                         <p className='text-sm text-brown'>Sales Manager</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header
