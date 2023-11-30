import React from "react";
import { useNavigate } from "react-router";
import DropDown from "./DropDown";

function SingleMember({ name, gender, id, singleEdit }) {
  const navigate = useNavigate();

  const goToDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex" index={id}>
      <div
        className="flex justify-between w-250 py-2 cursor-pointer"
        onClick={() => goToDetailPage(id)}
      >
        <div className=" ml-[10px] text-left w-[220px]">
          <h1 className="text-[14px] font-medium">{name}</h1>
          <p className="text-[9px] text-[#7C7B7C]">{gender}</p>
        </div>
      </div>
      <div className=" mr-2 mt-2 cursor-pointer">
        <DropDown
          id1={id}
          name={name}
          gender={gender}
          singleEdit={singleEdit}
        />
      </div>
    </div>
  );
}

export default SingleMember;
