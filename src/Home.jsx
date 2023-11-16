import React, { useState } from "react";
import TopStore from "./MiddleSection/TopStore";
import Sidebar from "./LeftSection/sidebar";
import Cards from "./MiddleSection/Cards";
import RegularSell from "./MiddleSection/RegularSell";
import Analysis from "./MiddleSection/Analysis";
import Profile from "./LeftSection/Profile";
import FirstCard from "./RightSection/FirstCard";
import Meeting from "./RightSection/Meeting";
import TeamMember from "./RightSection/TeamMember";
import Message from "./RightSection/Message";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
function Home() {
  // const show=useSelector(state=>state.AddMember.isModal)
  const { isModal } = useSelector((state) => state.AddMember);
  //  const Data=useSelector(state=>state.AddMember.data)
  //  console.log(Data[0])
 //  console.log(isModal)

  return (
    <div className="sm-text-sm md:text-md">
      <div className="w-full flex">
        <div className="w-1/4 fixed top-[20px] md:w-[20%vw] md:z-50 left-0 h-full">
          <div className="hidden lg:block md:block">
            <Sidebar index={0} className="h-200" />
          </div>
          <div className="hidden lg:block md:block">
            <Profile />
          </div>
        </div>
       
        <div className="lg:w-2/4 md:w-[45%vw] md:px-2 lg:ml-[300px] md:ml-[100px] sm:w-[100%] overflow-auto">
          <div className="">
            <Cards />
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:text-center gap-5 mt-10 mb-10 justify-between ">
            <div className="flex sm:justify-center">
              <RegularSell className="w-1/2" />
            </div>
            <div>
              <Analysis className="w-1/2 ml-12" />
            </div>
          </div>
          <div className="p-2">
            <TopStore />
          </div>

          <div className="md:hidden">
            <FirstCard />
          </div>
          <div className="md:hidden sm:py-4 sm:ml-[30px]">
            <Meeting />
          </div>
          <div className="md:hidden">
            <TeamMember />
          </div>
        </div>
       
        <div className="hidden lg:w-[25%] md:px-2 md:grid justify-center md:w-[35%]">
          <div className="fixed w-[100%vw] top-0 p-[20px]  bg-white z-40">
            <Message />
          </div>
          <div className="mt-[40px]">
            <FirstCard />
          </div>
          <div>
            <Meeting />
          </div>
          <div>
            <TeamMember />
          </div>
        </div>
      </div>
      {isModal ? <Modal /> : null}
    </div>
  );
}

export default Home;
