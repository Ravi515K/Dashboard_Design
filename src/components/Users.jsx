import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../LeftSection/sidebar";
import Profile from "../LeftSection/Profile";
import "../App.css";
import Pagination from "./Pagination";
import Tabs from "./Tabs";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  //  console.log(result)
  return result;
};
function Users() {
  
  return (
    <div className="flex justify-center w-[100%] h-fit p-0 m-0 border border-black ">
      <div className="w-[20%]">
        <Sidebar index={3} />
        <Profile />
      </div>
      
     

      <div className="border border-black w-[80%]">
        <h2 className="text-center font-semibold bg-blue py-6">User List</h2>
        <div className="w-[100%]"> <Tabs /></div>
       
       
      </div>
      
    </div>
  );
}

export default Users;
