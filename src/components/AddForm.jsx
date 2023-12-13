import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addData, closeModal } from "../Redux/Slices/AddMember/AddMember";
import { RxCross1 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddForm({AllData}) {
    const {register, handleSubmit, formState:{errors},} = useForm()
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

   
    const postData = async (data) => {
        
      const res = await fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":
            "Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e",
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        console.error("Failed to add user:", res.status, res.statusText);
        return null;
      }
    
      const result = await res.json();
      return result;
    };
  
    const mutation = useMutation({
      mutationFn: (data) => {
        return postData(data);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["member"] });
      },
    });
    
    const handlePost = (data) => {
        
         const nameExist = AllData.some(el=>el.name.toLowerCase() == data.name.toLowerCase())
        
        
        if(nameExist){
            toast.error("username already Selected")
         }else{
            mutation.mutate(data);
            dispatch(addData(data));
          
            toast.success("username Added Succefully")
         }
         dispatch(closeModal());
    };

    const handleClose = () => {
        dispatch(closeModal());
      };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handlePost)}
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
            {...register("name",{required:"name is Required"})}
            className="border border-gray-500 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
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
            {...register("email",{required:"email is Required"})}
            className="border border-gray-500 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label class="block mb-2">
            Gender
            <div class="mt-1">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "Gender is required" })}
              />
              
              <label for="male" class="mr-4 ml-1">
                Male
              </label>

              <input
                type="radio"
                value="female"
                {...register("gender", { required: "Gender is required" })}
               
              />
              <label for="female" className="mr-4 ml-1">Female</label>
            </div>
            {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
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
      </form>
    </div>
  );
}

export default AddForm;
