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
    <div className="">
      <div className="w-full flex ">
        <div className="w-1/4 md:w-1/5 fixed top-[20px] left-0 h-full ">
          <div className="hidden lg:block md:block">
            {" "}
            <Sidebar className="h-200" />
          </div>
          <div className="hidden lg:block md:block">
            <Profile />
          </div>
        </div>
       
        <div className="lg:w-2/4 md:w-2/4 ml-[300px] ">
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
          <div className="">
            {" "}
            <TopStore />
          </div>

          <div className="lg:hidden md:hidden">
            <FirstCard />
          </div>
          <div className="lg:hidden md:hidden sm:py-4 sm:ml-[30px]">
            <Meeting />
          </div>
          <div className=" lg:hidden md:hidden">
            <TeamMember />
          </div>
        </div>
       
        <div className=" md:block w-1/4 px-10  bg-white">
          <div className="fixed  top-0 p-[20px]  bg-white z-40">
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
