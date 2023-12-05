import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import Profile from "../AsideSection/components/Profile";
import Sidebar from "../AsideSection/components/Sidebar";
import Analysis from "./components/Analysis";
import Cards from "./components/Cards";
import RegularSell from "./components/RegularSell";
import TopStore from "./components/TopStore";
import EditModal from "../../Modals/EditModal";
import Modal from "../../Modals/Modal";
import FirstCard from "./components/FirstCard";
import Meeting from "./components/Meeting";
import TeamMember from "./components/TeamMember";
import Message from "./components/Message";
function Dashboard() {
  const { isModal, isEdit } = useSelector((state) => state.AddMember);

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

        <div className="lg:w-2/4 md:w-[45%vw] md:px-2 lg:ml-[290px] md:ml-[100px] sm:w-[100%] overflow-auto ">
          <div className="lg:w-[100%]">
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

        <div className="hidden lg:w-[25%] md:px-2 md:grid justify-center md:w-[35%] ">
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
      {isEdit ? <EditModal /> : null}
    </div>
  );
}

export default Dashboard;
