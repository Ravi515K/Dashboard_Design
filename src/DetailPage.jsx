
import Sidebar from "./LeftSection/sidebar";
import Profile from "./LeftSection/Profile";
import TeamMember from "./RightSection/TeamMember";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleMember from "./components/SingleMember";
import { openModal } from "./Redux/Slices/AddMember/AddMember";
import Modal from "./components/Modal";

function DetailPage() {
  const dispatch = useDispatch()
  const { isModal } = useSelector((state) => state.AddMember);
  const Data = useSelector(state => state.AddMember.exceptData)
  const obj = useSelector((state) => state.AddMember.singleData);
  // console.log(Data)

  const handleModal = () => {
    dispatch(openModal())
  }

  
  return (
    <div className="flex p-0 m-0">

      <div className="w-1/4 md:w-1/5">
        <div className="hidden lg:block md:block">
          <Sidebar className="h-200" />
        </div>
        <div className="hidden lg:block md:block">
          <Profile />
        </div>
      </div>

      <div className="w-2/4 grid justify-center bg-[#EFEAE2]">
        <h1 className="text-center mt-[30px] font-semibold text-[20px]">Member Detail</h1>
        <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnV2l1M4uA3J-Zcl0KIKKrKhhtmpQnB8CFNm883kR&s" class="w-full" />
          <div class="flex justify-center mt-[-100px]">
            <img
              src={obj[0].imgUrl}
              className="rounded-full w-[200px] h-[200px]"
            />
          </div>
          <div class="text-center px-3 pt-2">
            <h3 class="text-black text-sm bold font-sans font-semibold uppercase ">{obj[0].name}</h3>
            <p class="mt-2 font-sans font-light text-black">
              Hello, I'm from <span className="font-semibold">{obj[0].role}</span> background!
            </p>
          </div>

        </div>
      </div>
      <div className="w-1/4  mt-6 shadow-md px-4 py-2">

        <h1 className='text-[17px] font-medium'>Team Member</h1>
        <div className='max-h-[400px] overflow-y-scroll'>
          {Data.map((el, index) => (
            <SingleMember key={index} id={el.id} name={el.name} role={el.role} url={el.imgUrl} />
          ))}

        </div>
        <div className='bg-sky p-2 rounded-[15px] flex justify-center items-center text-[12px] cursor-pointer' onClick={handleModal}>
          <span className='w-20 h-20 rounded-full flex justify-center items-center bg-white p-1 mr-2'>+</span>
          Add Member
        </div>

      </div>
      {isModal ? <Modal /> : null}
    </div>
  );
}

export default DetailPage;



