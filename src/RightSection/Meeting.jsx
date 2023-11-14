import React from 'react'
import {BsFillCameraVideoFill} from 'react-icons/bs'
function Meeting() {
    return (
        <div className='mt-[70px] shadow-md '>
            <div>
                <div className='flex'>
                    <div className='w-30 h-30 rounded-full flex justify-center items-center bg-violet mr-4'><BsFillCameraVideoFill/></div>
                    <div className='text-[17px] font-semibold'>Daily Meeting</div>
                </div>
                <div className='flex ml-12'>
                    <p className='text-sm text-dark-brown '>12+ Person</p>
                    <p className='text-sm text-dark-brown ml-4'>6:30 Pm</p>
                </div>
            </div>
            <div className='flex mt-5'>
                <div className='flex'>
                    <div><img  className='w-30 h-30 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5q9zsbXW01zLBnO9G6kzKSXKfoDbfqHQfxuNznq_&s'/></div>
                    <div><img  className='w-30 h-30 rounded-full ml-[-8px]' src='https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'/></div>
                    <div><img  className='w-30 h-30 rounded-full ml-[-10px]' src='https://media.istockphoto.com/id/167288271/photo/serious-young-woman-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9ji0oEfhSexSpqRbrqiZT6Wubkbzcyn_yEHOedZ7ijw='/></div>
                </div>
                <div className='text-10 flex items-center w-100 font-semibold'>They will conduct the meeting</div>
            </div>
            <div>
                <button className='mt-5 bg-btn-clr p-2 rounded-large text-white text-sm'>click for meeting link</button>
            </div>
        </div>
    )
}

export default Meeting
