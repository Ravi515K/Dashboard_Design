import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function EditModal({ obj, person, setPerson }) {
 
  let id = obj.id
  let [isOpen, setIsOpen] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEdit = (data) => {
    console.log(data.name)
    const index = person.findIndex(
      (item) => item.id === data.id && item.name.toLowerCase() !== data.name.toLowerCase()
    );
    console.log(index)
    const newPerson = [...person];
    if (index !== -1) {
      newPerson.splice(index, 1, data);
      setPerson(newPerson);
    }else{
      toast.errors("user Already Existed")

    }

    setIsOpen(false);
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 backdrop-blur-sm flex w-screen items-center justify-center p-4 ">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white border-2 border-[#1F723F] p-10">
          <Dialog.Title className={"font-semibold"}>
            Edit Your Information
          </Dialog.Title>
          <div className="mt-5">
            {/* <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <label htmlFor="">Id :</label>
                <input
                  type="text"
                  value={user.id}
                  name="id"
                  onChange={(e) => handleChange(e)}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              <div className="flex justify-between mt-5">
                <label htmlFor="">Name :</label>
                <input
                  type="text"
                  value={user.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              <div className="flex justify-between my-5">
                <label>Gender :</label>
                <input
                  type="text"
                  value={user.gender}
                  name="gender"
                  onChange={(e) => handleChange(e)}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="">Role :</label>
                <input
                  type="text"
                  value={user.role}
                  name="role"
                  onChange={(e) => handleChange(e)}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              <div className="flex justify-left mt-7">
                <button
                  type={"submit"}
                  className="w-16 h-8 p-3 rounded-md border bg-[#91D273] border-black flex justify-center items-center"
                >
                  Submit
                </button>
              </div>
            </form> */}
            <form className="w-full" onSubmit={handleSubmit(handleEdit)}>
              <div className="flex justify-between">
                <label htmlFor="">Id :</label>
                <input
                  defaultValue={id}
                  {...register("id", { required: "id Required" })}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              {errors.id && (
                <small className="text-red-500 ml-[120px]">
                  {errors.id.message}
                </small>
              )}
              <div className="flex justify-between mt-5">
                <label htmlFor="">Name :</label>
                <input
                  {...register("name", { required: "name Required" })}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              {errors.name && (
                <small className="text-red-500 ml-[120px]">
                  {errors.name.message}
                </small>
              )}
              <div className="flex justify-between mt-5">
                <label>Gender :</label>
                <input
                  {...register("gender", { required: "gender Required" })}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              {errors.gender && (
                <small className="text-red-500 ml-[120px]">
                  {errors.gender.message}
                </small>
              )}
              <div className="flex justify-between mt-5">
                <label htmlFor="">Role :</label>
                <input
                  {...register("role", { required: "role Required" })}
                  className="border border-gray-400 rounded-md px-2"
                />
              </div>
              {errors.role && (
                <small className="text-red-500 block ml-[120px]">
                  {errors.role.message}
                </small>
              )}
              <div className="flex justify-left mt-7">
                <button
                  type={"submit"}
                  className="w-16 h-8 p-3 rounded-md border bg-[#91D273] border-black flex justify-center items-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
