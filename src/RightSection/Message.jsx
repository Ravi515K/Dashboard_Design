import React from 'react'
import { AiFillMessage, AiFillBell } from 'react-icons/ai'
function Message() {
    return (
        <div className=''>
            <div className='flex '>
                <div className='flex w-50 h-50 border-solid border-2 border-#D4D6D7 rounded-lg justify-center items-center mr-2'><AiFillMessage /></div>
                <div className='flex w-50 h-50 border-solid border-2 border-#D4D6D7 rounded-lg justify-center items-center mr-2'><AiFillBell /></div>
                <div className='flex  justify-between'>
                    <div className='mr-2'>
                        <img className='w-50 h-50 rounded-full' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww' />
                    </div>
                    <div className='text-center grid items-center'>
                        <h1 className='text-15 font-bold'>Nora Watson</h1>
                        <p className='text-sm text-brown'>Sales Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
