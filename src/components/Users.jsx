import React from "react";
import { useQuery } from "@tanstack/react-query";
import Sidebar from "../LeftSection/sidebar";
import Profile from "../LeftSection/Profile";
import "../App.css";
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  //  console.log(result)
  return result;
};
function Users() {
  const { data, isLoading, isError } = useQuery({
    querykey: ["user"],
    queryFn: getUsers,
    staleTime: 30000,
  });

  // console.log(data);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOIYoAbHuCS9ddbK6eDqnAIMsat7E6NyhWlc4TiDl98QjdCIRDCRaGFjjNcRzFoNDaRU&usqp=CAU" />
      </div>
    );
  }
  if (isError) {
    return <p>{isError.message}</p>;
  }
  return (
    <div className="flex justify-center w-fit h-fit p-0 m-0 border border-black">
      <div>
        <Sidebar index={3} />
        <Profile />
      </div>
      <div>
        <h2 className="text-center font-semibold bg-blue py-6">User List</h2>

        <div className="flex flex-col text-center">
          <div className="flex bg-light-green border">
            <div className="w-[5vw]">ID</div>
            <div className="w-[12vw]">User Name</div>
            <div className="w-[12vw]">Email</div>
            <div className="w-[16vw]">Address</div>
            <div className="w-[10vw]">Phone</div>
            <div className="w-[10vw]">Website</div>
            <div className="w-[12vw]">Company</div>
            {/* Add additional div headers as needed */}
          </div>

          <div className="">
            {data &&
              data.map((user) => (
                <div
                  key={user.id}
                  className="flex bg-middle-bg text-[13px] sm:text-[12px] md:text-[15px] lg:text-[12px] border border-b-2"
                >
                  <div className=" h-[20px] w-[5vw] p-2">{user.id}</div>
                  <div className="w-[12vw] p-2">{user.name}</div>
                  <div className="w-[12vw] p-2">{user.email}</div>
                  <div className="w-[16vw] p-2">
                    {user.address.street},{user.address.suite},{" "}
                    {user.address.city},{user.address.zipcode}
                  </div>
                  <div className="w-[10vw] p-2">{user.phone}</div>
                  <div className="w-[10vw] p-2">{user.website}</div>
                  <div className="w-[10vw] p-2">{user.company.name}</div>
                  {/* Add additional div cells as needed */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
