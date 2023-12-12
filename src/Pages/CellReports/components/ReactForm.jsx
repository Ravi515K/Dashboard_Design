import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ReactForm({ setPerson, person, setIsOpen }) {
let id=person.length+1 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAdd = (data) => {
  
    const userExists = person.some(
      (el) => el.name.toLowerCase() === data.name.toLowerCase()
    );

    if (userExists) {
      toast.error("User Already Existed");
    } else {
        setPerson([data,...person])
      toast.success("New User Added");
    }
    setIsOpen(false);
  };
  return (
    <div className="mt-5">
      <form className="w-full" onSubmit={handleSubmit(handleAdd)}>
        <div className="flex justify-between">
          <label htmlFor="">Id :</label>
          <input
            value={id}
            {...register("id", { required: "id Required" })}
            className="border border-gray-400 rounded-md px-2"
          />
        </div>
        {errors.id && (
          <small className="text-red-500 ml-[120px]">{errors.id.message}</small>
        )}
        <div className="flex justify-between mt-5">
          <label htmlFor="">Name :</label>
          <input
            {...register("name", { required: "name Required" })}
            className="border border-gray-400 rounded-md px-2"
          />
        </div>
        {errors.name && (
          <small className="text-red-500 ml-[120px]">{errors.name.message}</small>
        )}
        <div className="flex justify-between mt-5">
          <label>Gender :</label>
          <input
           
            {...register("gender", { required: "gender Required" })}
            className="border border-gray-400 rounded-md px-2"
          />
        </div>
        {errors.gender && (
          <small className="text-red-500 ml-[120px]">{errors.gender.message}</small>
        )}
        <div className="flex justify-between mt-5">
          <label htmlFor="">Role :</label>
          <input
            {...register("role", { required: "role Required" })}
            className="border border-gray-400 rounded-md px-2"
          />
        </div>
        {errors.role && (
          <small className="text-red-500 block ml-[120px]">{errors.role.message}</small>
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
  );
}
