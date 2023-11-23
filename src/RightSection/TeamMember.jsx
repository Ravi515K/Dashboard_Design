import React, { useEffect, useState } from "react";
import SingleMember from "../components/SingleMember";
import { useDispatch, useSelector } from "react-redux";
import { GetData, openModal } from "../Redux/Slices/AddMember/AddMember";
import { useQuery } from "@tanstack/react-query";



function TeamMember() {
  const dispatch = useDispatch();
  const getMember = async() => {
         try{
            const res = await fetch("https://gorest.co.in/public/v2/users", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  'Authorization':"Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e",
                }
              })
            let   result =await res.json()
            console.log(result)
              dispatch(GetData(result))
            return result
         }catch{(err)=>console.log(err)}
           
        
     }
      
  const { data} = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
    staleTime: 10000,
  });
 

  console.log(data);

  //   let Data = useSelector((state) => state.AddMember.data);
  //console.log(Data)
  const handleModal = () => {
    dispatch(openModal());
  };

  return (
    <div className="mt-[120px] shadow-md px-4 py-2">
      <h1 className="text-[17px] font-medium">Team Member</h1>
      <div className="max-h-[200px] overflow-y-scroll">
        {data?.map((el, index) => (
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
