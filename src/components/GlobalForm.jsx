import React from "react";
import { useForm } from "react-hook-form";
import { addData, closeModal } from "../Redux/Slices/AddMember/AddMember";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { Input } from "postcss";
function GlobalForm({ onSubmit, h1, modalAction, singleData }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: singleData?.name || "",
      email: singleData?.email || "",
      gender: singleData?.gender || "",
    },
  });

  const handleClose = () => {
    dispatch(modalAction());
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex justify-between">
          <div>
            <h1 className="mb-[20px] font-semibold">{h1}</h1>
          </div>
          <div onClick={handleClose}>
            <RxCross1 />
          </div>
        </div>

        <div className="mb-4">
          
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Name
          </label>
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Please enter a Only character",
              },
            })}
            className="border border-gray-500 rounded-md"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-6">
          {/* <Input label="Email" name="email" register={register} errors={errors}/> */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email with @ sign",
              },
            })}
            className="border border-gray-500 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="border border-gray-500 rounded-md"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs italic">
              {errors.gender.message}
            </p>
          )}
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

export default GlobalForm;
