import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Pagination from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import CardType from "../../../components/CardType";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();

  return result;
};
export default function Tabs() {
  const [tab, setTab] = useState(true);
  const [usersPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    querykey: ["user"],
    queryFn: getUsers,
    staleTime: 30000,
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data?.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (Pagnum) => {
    setCurrentPage((prev) => prev + Pagnum);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOIYoAbHuCS9ddbK6eDqnAIMsat7E6NyhWlc4TiDl98QjdCIRDCRaGFjjNcRzFoNDaRU&usqp=CAU" />
      </div>
    );
  }
  if (isError) {
    return <p>{"Dat is not found"}</p>;
  }
  return (
    <Tab.Group>
      <Tab.List className="w-300px border border-black text-center py-2">
        <Tab
          className={
            tab
              ? "w-[100px] h[100px] border border-black rounded-md  bg-middle-bg"
              : ""
          }
          onClick={() => setTab(true)}
        >
          List Type
        </Tab>
        <Tab
          className={
            !tab
              ? "ml-6 w-[100px] h[100px] border border-black rounded-md bg-middle-bg"
              : "ml-6"
          }
          onClick={() => setTab(false)}
        >
          Card Type
        </Tab>
      </Tab.List>
      <Tab.Panels className="">
        <Tab.Panel>
          <div className="text-center table w-full max-w-2xl mx-auto bg-white shadow-md rounded my-6 overflow-x-auto">
            <div className="flex table-header font-bold bg-light-green border sm:text-[10px] md:text-[13px] lg:text-[15px]">
              <div className="table-cell w-[5vw] ">ID</div>
              <div className="table-cell w-[12vw]">User Name</div>
              <div className="table-cell w-[12vw]">Email</div>
              <div className="table-cell w-[16vw]">Address</div>
              <div className="table-cell w-[10vw]">Phone</div>
              <div className="table-cell w-[10vw]">Website</div>
              <div className="table-cell w-[12vw]">Company</div>
              {/* {
                object.keys(data[0]).map(key=>(
                  {key}
                ))
              } */}
              {/* Add additional div headers as needed */}
            </div>

            <div className="table-body">
              {currentUsers &&
                currentUsers.map((user) => (
                  <div
                    key={user.id}
                    className="table-row bg-middle-bg text-[13px] sm:text-[10px] md:text-[13px] lg:text-[15px] border border-b-2"
                  >
                    <div className="flex">
                      <div className=" h-[20px] w-[5vw] p-2">{user.id}</div>
                      <div className="w-[12vw] p-2 border border-black whitespace-normal">
                        {user.name}
                      </div>
                      <div className="w-[15vw] p-2 border border-black whitespace-normal">
                        {user.email}
                      </div>
                      <div className="w-[16vw] p-2 border border-black whitespace-normal">
                        {user.address.street},{user.address.suite},
                        {user.address.city},{user.address.zipcode}
                      </div>
                      <div className="w-[10vw] p-2 border border-black whitespace-normal">
                        {user.phone}
                      </div>
                      <div className="w-[10vw] p-2 border border-black whitespace-normal">
                        {user.website}
                      </div>
                      <div className="w-[10vw] p-2 border border-black whitespace-normal">
                        {user.company.name}
                      </div>
                      {/* Add additional div cells as needed */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="bottom-0">
            <Pagination
              currentPage={currentPage}
              paginate={paginate}
              totalUsers={data.length}
            />
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <CardType data={data} />
          <div className="bottom-0">
            <Pagination
              currentPage={currentPage}
              paginate={paginate}
              totalUsers={data.length}
            />
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
