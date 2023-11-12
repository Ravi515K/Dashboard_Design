import React from 'react'
import { MdShoppingBag } from 'react-icons/md'
function Cards() {
  return (
    <div className=''>
      <div className='sm:text-center md:text-left w-2/4 fixed top-0 p-[20px] bg-white z-40'>
        <h1 className='text-xl font-bold'>Dashboard</h1>
        <p className='text-brown text-sm'>4th August 2023</p>
      </div>
      <div className=' sm:grid-cols-1 gap-6 mx-auto max-w-[1200px] grid lg:grid-cols-3 md:grid-cols-2 py-[90px]'>
        <div className=' bg-custom-blue w-200 h-100 p-2 rounded-lg'>
          <ul >
            <li className='flex'><MdShoppingBag /> Total Earning</li>
          </ul>
          <h2 className='text-center'>242.65K</h2>
          <p className='text-center text-sm'>From the running month</p>
        </div>
        <div className=' bg-blue w-200 h-100 p-2 mr-8 rounded-lg'>
          <ul >
            <li className='flex'><MdShoppingBag /> Average Earning</li>
          </ul>
          <h2 className='text-center'>17.347K</h2>
          <p className='text-center text-sm'>Daily Earning of this month</p>
        </div>
        <div className=' bg-green w-200 h-100 p-2 rounded-lg'>
          <ul >
            <li className='flex'><MdShoppingBag />Conversion rate</li>
          </ul>
          <h2 className='text-center'>74.86%</h2>
          <p className='text-center text-sm'>+6.04 greater that last Month</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
