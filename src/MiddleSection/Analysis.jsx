import React from 'react'
import { BsFillAspectRatioFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { GiSolderingIron } from 'react-icons/gi'
function Analysis() {
    return (
        <div className='grid justify-center'>
            <h1 className='font-semibold'>More Analysis</h1>
            <p className='text-10 text-brown'>There are More to view</p>
            <div className='mt-10 ml-2'>
                <div className='flex p-3 shadow-md'>
                    <div><BsFillAspectRatioFill className='mr-2 ml-2 mt-1' /></div>
                    
                    <h2 className='text-15 font-semibold'>Store Sell ratio</h2>
                    <div className='mr-2 ml-3 mt-1'>< IoIosArrowForward  /></div>
                    
                </div>
                <div className='flex mt-4 p-3 shadow-md'>
                    <div><GiSolderingIron className='mr-2 ml-2 mt-1' /></div>
                    
                    <h2 className='text-15 font-semibold'> Top item Sold</h2>
                    <div  className='mr-2 ml-4 mt-1'>< IoIosArrowForward /></div>
                    
                </div>
                <p className='text-10 mt-4'>Analysis created by </p>
            </div>
        </div>
    )
}

export default Analysis

