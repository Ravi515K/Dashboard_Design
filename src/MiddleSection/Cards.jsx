import React from 'react'
import { MdShoppingBag } from 'react-icons/md'
import SingleCard from '../components/SingleCard'
function Cards() {
  const cardData=[
    {icon:<MdShoppingBag />,heading:'Total Earning',follow:'242.65K',statement:'From the running month',clr:'bg-custom-blue'},
    {icon:<MdShoppingBag />,heading:'Average Earning',follow:'17.347.65K',statement:'Daily Earning of this month',clr:'bg-blue'},
    {icon:<MdShoppingBag />,heading:'Conversion rate',follow:'74.86K',statement:'+6.04 greater than last month',clr:'bg-green'},
  ]
  return (
    <div className=''>
      <div className='sm:text-center md:text-left w-2/4 md:w-[100%] -ml-[15px]  fixed top-0 p-[20px] bg-white z-40'>
        <h1 className='text-xl font-bold'>Dashboard</h1>
        <p className='text-brown text-sm'>4th August 2023</p>
      </div>
      <div className=' sm:grid-cols-1 md:gap-6 mx-auto max-w-[1200px] grid lg:grid-cols-3 md:grid-cols-2 py-[90px]'>
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
