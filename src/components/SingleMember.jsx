import React, { useEffect } from 'react'
// import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { singleMemberData } from '../Redux/Slices/AddMember/AddMember'
import DropDown from './DropDown'
function SingleMember({name ,gender , id}) {
  //  console.log(id)
 
    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    const goToDetailPage = (id) =>{
       // console.log(id)
            dispatch(singleMemberData(id))
            navigate('/detail')
    }

  
   

   
   
    return (
        <div className='flex' index={id}>
            <div className='flex justify-between w-250 py-2 cursor-pointer' onClick={()=>goToDetailPage(id)}>
            {/* <div className=''>
                <img className='w-30 h-30 rounded-full' src={url} alt="" />
            </div> */}
            <div className=' ml-[10px] text-left w-[220px]'>
                <h1 className='text-[14px] font-medium'>{name}</h1>
                <p className='text-[9px] text-[#7C7B7C]'>{gender}</p>
            </div>
            </div>
            <div  className=' mr-2 mt-2 cursor-pointer' ><DropDown id={id}/></div>
        </div>
    )
}

export default SingleMember
