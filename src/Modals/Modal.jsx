import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addData, closeModal } from "../Redux/Slices/AddMember/AddMember";
import AddForm from "src/components/AddForm";
import useFetch from "src/customHook/useFetch";
import GlobalForm from "src/components/GlobalForm";
import toast from "react-hot-toast";


function Modal() {
   const {cacheData} = useFetch()
   const dispatch = useDispatch();
   const queryClient = useQueryClient();


  const postData = async (formData) => {
    
    const res = await fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
   
    return data;
  };

  const mutation = useMutation({
    mutationFn: (formData) => {
      return postData(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
    },
  });

  const onSubmit = (data) => {
        
    const nameExist = cacheData.some(el=>el.name.toLowerCase() == data.name.toLowerCase())
   
   
   if(nameExist){
       toast.error("username already Selected")
    }else{
       mutation.mutate(data);
       dispatch(addData(data));
     
       toast.success("username Added Succefully")
    }
    dispatch(closeModal());
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40">
      {/* <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex justify-between">
          <div>
            <h1 className="mb-[20px] font-semibold">Add Member</h1>
          </div>
          <div onClick={handleClose}>
            <RxCross1 />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div>
          <label class="block mb-2">
            Gender
            <div class="mt-1">
              <input
                type="radio"
                id="male"
                name="gender"
                class="mr-2"
                value={"male"}
                onChange={handleInputChange}
                required
              />
              <label for="male" class="mr-4">
                Male
              </label>

              <input
                type="radio"
                id="female"
                name="gender"
                value={"female"}
                class="mr-2"
                onChange={handleInputChange}
                required
              />
              <label for="female">Female</label>
            </div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form> */}
      <GlobalForm onSubmit={onSubmit} h1={"Add Member"} modalAction={closeModal}/>
    </div>
  );
}

export default Modal;
