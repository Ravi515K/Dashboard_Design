import React, { useEffect } from 'react'
// import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { singleMemberData } from '../Redux/Slices/AddMember/AddMember'
import DropDown from './DropDown'
function SingleMember({name , role, url,id}) {
  //  console.log(id)
 
    const dispatch=useDispatch()
    const navigate = useNavigate()
    
    const goToDetailPage = (id) =>{
       // console.log(id)
            dispatch(singleMemberData(id))
            navigate('/detail')
    }

  
   

    useEffect(()=>{
        fetch('https://gorest.co.in/public/v2/users',{
            method:'GET',
             headers:{
                 "Accept": "application/json",
                 "Content-Type": "application/json",
                 "Authorization": "Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e"
               }
             
         }).then((res)=>{
            if(res){
                let data =  res.json()
                console.log(data)
            }else{
                console.log('Something went to wrong')
            }
             
         }).catch((err)=>{
             console.log(err)
         })
       
    })
    console.log(x)
    return (
        <div className='flex' index={id}>
            <div className='flex justify-between w-250 py-2 cursor-pointer' onClick={()=>goToDetailPage(id)}>
            {/* <div className=''>
                <img className='w-30 h-30 rounded-full' src={url} alt="" />
            </div> */}
            <div className=' ml-[10px] text-left w-[220px]'>
                <h1 className='text-[14px] font-medium'>{name}</h1>
                <p className='text-[9px] text-[#7C7B7C]'>{role}</p>
            </div>
            </div>
            <div  className=' mr-2 mt-2 cursor-pointer' ><DropDown /></div>
        </div>
    )
}

export default SingleMember
