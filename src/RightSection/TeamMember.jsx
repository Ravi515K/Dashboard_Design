import React, { useState } from 'react'
import SingleMember from '../components/SingleMember'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import {openModal } from '../Redux/Slices/AddMember/AddMember'

function TeamMember() {
    const dispatch = useDispatch()
    const Data=useSelector(state=>state.AddMember.data)
     console.log(Data)
    // const data = [
    //     {name:'Mahid Ahmed',role:'Product Manager', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5q9zsbXW01zLBnO9G6kzKSXKfoDbfqHQfxuNznq_&s'},
    //     {name:'Daqnif kari',role:'Developer', url:'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg'},
    //     {name:'Alina michel',role:'Co-ordinator', url:'https://media.istockphoto.com/id/167288271/photo/serious-young-woman-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9ji0oEfhSexSpqRbrqiZT6Wubkbzcyn_yEHOedZ7ijw='},
    //     {name:'Salina Mistao',role:'Product Manager', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5q9zsbXW01zLBnO9G6kzKSXKfoDbfqHQfxuNznq_&s'},
    // ]
    const handleModal = () => {
           dispatch(openModal())
    }
    return (
        <div className='mt-6 shadow-md '>
            <h1 className='text-[17px] font-medium'>Team Member</h1>
            <div className='max-h-[200px] overflow-y-scroll'>
               {Data.map((el,index)=>(
                 <SingleMember key={index} id={el.id} name={el.name} role={el.role} url={el.imgUrl}/>
               ))}
                
            </div>
            <div className='bg-sky p-2 rounded-[15px] flex justify-center items-center text-[12px] cursor-pointer' onClick={handleModal}>
                <span className='w-20 h-20 rounded-full flex justify-center items-center bg-white p-1 mr-2'>+</span>
                Add Member
            </div>
        </div>
    )
}

export default TeamMember
