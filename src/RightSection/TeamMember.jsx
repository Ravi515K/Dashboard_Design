import React, { useEffect, useState } from "react";
import SingleMember from "../components/SingleMember";
import { useDispatch, useSelector } from "react-redux";
import { GetData, openModal } from "../Redux/Slices/AddMember/AddMember";
import { useQuery } from "@tanstack/react-query";
import useGetMember from "../customHook/useFetch";

function TeamMember() {
  const dispatch = useDispatch();
  const {data,cacheData} = useGetMember()
 // console.log(data)
 
  const handleModal = () => {
    dispatch(openModal());
  };

  return (
    <div className="mt-[120px] shadow-md px-4 py-2">
      <h1 className="text-[17px] font-medium">Team Member</h1>
      <div className="max-h-[200px] overflow-y-scroll">
        {cacheData?.map((el, index) => (
          <SingleMember
            key={index}
            id={el.id}
            name={el.name}
            gender={el.gender}
          />
        ))}
      </div>
      <div
        className="bg-sky p-2 rounded-[15px] flex justify-center items-center text-[12px] cursor-pointer"
        onClick={handleModal}
      >
        <span className="w-20 h-20 rounded-full flex justify-center items-center bg-white p-1 mr-2">
          +
        </span>
        Add Member
      </div>
    </div>
  );
}

export default TeamMember;
