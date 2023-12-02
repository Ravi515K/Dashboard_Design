import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Profile from "../AsideSection/components/Profile";
import Sidebar from "../AsideSection/Sidebar";
import EditModal from "../../Modals/EditModal";
import Modal from "../../Modals/Modal";
import { openModal_in } from "../../Redux/Slices/AddMember/AddMember";
import SingleMember from "../../components/SingleMember";
import useGetMember from "../../customHook/useFetch";

function DetailPage() {
  const { inModal, inEdit } = useSelector((state) => state.AddMember);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useGetMember();

  let excludedData = [];
  let singleMemberData;

  excludedData = data?.filter((item) => item.id != id);

  singleMemberData = data?.find((item) => item.id == id);

  const handleInModal = () => {
    dispatch(openModal_in());
  };

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
        <h1 className="text-center mt-[30px] font-semibold text-[20px]">
          Member Detail
        </h1>
        <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnV2l1M4uA3J-Zcl0KIKKrKhhtmpQnB8CFNm883kR&s"
            class="w-full"
          />
          <div class="flex justify-center mt-[-100px]">
            <img src={""} className="rounded-full w-[200px] h-[200px]" />
          </div>
          <div class="text-center px-3 pt-2">
            <h3 class="text-black text-sm bold font-sans font-semibold uppercase ">
              {singleMemberData?.name}
            </h3>
            <p class="mt-2 font-sans font-light text-black">
              Hello, I'm from Software background!
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4  mt-6 shadow-md px-4 py-2">
        <h1 className="text-[17px] font-medium">Team Member</h1>
        <div className="max-h-[400px] overflow-y-scroll">
          {excludedData?.map((el, index) => (
            <SingleMember
              key={index}
              id={el.id}
              name={el.name}
              gender={el.gender}
              singleEdit={id}
            />
          ))}
        </div>
        <div
          className="bg-sky p-2 rounded-[15px] flex justify-center items-center text-[12px] cursor-pointer"
          onClick={handleInModal}
        >
          <span className="w-20 h-20 rounded-full flex justify-center items-center bg-white p-1 mr-2">
            +
          </span>
          Add Member
        </div>
        {inModal ? <Modal /> : null}
        {inEdit ? <EditModal /> : null}
      </div>
    </div>
  );
}

export default DetailPage;
