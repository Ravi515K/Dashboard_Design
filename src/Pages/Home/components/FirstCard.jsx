import React from 'react'

function FirstCard() {
    return (
        <div className='w-[250px] md:w-[250pxvw] h-[250pxvw] bg-dark-green p-8 rounded-large mt-[50px]'>
            <div className='flex items-start text-center text-white'>Upgrade to Pro</div>
            <div className='mt-6  text-white'>
                <p className='text-xl'>$4.20/ <span className='text-sm'>Month</span> </p>
                <p className='text-sm'>$50 Billed Annually</p>
            </div>
            <div className='mt-6  text-white'>
                <button className='bg-light-green text-black text-sm p-2 rounded-lg'>Upgrade Now</button>
            </div>
        </div>
    )
}

export default FirstCard
