import React from 'react'
import { MdShoppingBag } from 'react-icons/md'
import SingleCard from '../components/SingleCard'
function Cards() {
  const cardData=[
    {icon:<MdShoppingBag />,heading:'Total Earning',follow:'242.65K',statement:'From the running month',clr:'custom-blue'},
    {icon:<MdShoppingBag />,heading:'Total Earning',follow:'242.65K',statement:'From the running month',clr:'blue'},
    {icon:<MdShoppingBag />,heading:'Total Earning',follow:'242.65K',statement:'From the running month',clr:'green'},
  ]
  return (
    <div className=''>
      <div className='sm:text-center md:text-left w-2/4 fixed top-0 p-[20px] bg-white z-40'>
        <h1 className='text-xl font-bold'>Dashboard</h1>
        <p className='text-brown text-sm'>4th August 2023</p>
      </div>
      <div className=' sm:grid-cols-1 gap-6 mx-auto max-w-[1200px] grid lg:grid-cols-3 md:grid-cols-2 py-[90px]'>
        {
          cardData.map((el,index)=>(
            <SingleCard key={index} data={el}/>
          ))
        }
      </div>
    </div>
  )
}

export default Cards
