import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ReactForm({ setPerson, person, setIsOpen }) {
  let id = person.length + 1;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      gender: "",
      role: "",
      img: "",
    },
  });

  const convertImageToUrl = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(new Blob([file]));
    });
  };

  const handleAdd = async (data) => {
    if (data.img[0]) {
      const file = data.img[0];
      const imageUrl = await convertImageToUrl(file);
      // console.log(imageUrl);
      setValue("img", imageUrl);
      data["img"] = imageUrl;
    }

    const userExists = person.some(
      (el) => el.name.toLowerCase() === data.name.toLowerCase()
    );

    if (userExists) {
      toast.error("User Already Existed");
    } else {
      console.log(data);
      setPerson([data, ...person]);
      toast.success("New User Added");
    }
    setIsOpen(false);
  };
  return (
    <div className="mt-5">
      <form className="w-full" onSubmit={handleSubmit(handleAdd)}>
        <div className="">
          <label htmlFor="" className="block">
            Id
          </label>
          <input
            value={id}
            {...register("id", { required: "id Required" })}
            className="border border-gray-400 rounded-md px-2"
          />
        </div>
        {errors.id && (
          <small className="text-red-500 ml-[120px]">{errors.id.message}</small>
        )}
        <div className="mt-5">
          <label className="block">Name :</label>
          <input
            {...register("name", {
              required: "name Required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Please enter a Only character",
              },
            })}
            className="border border-gray-400 rounded-md px-2"
          />
          {errors.name && (
            <small className="text-red-500 ml-[120px]">
              {errors.name.message}
            </small>
          )}
        </div>

        <div className="mt-5">
          <label
            className=" text-gray-700 text-sm font-bold mb-2 block"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-[200px] border border-gray-500 rounded-md"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <small className="text-red-500 text-xs italic relative right-[100px] top-5">
              {errors.gender.message}
            </small>
          )}
        </div>

        <div className="mt-5">
          <label className="block">Role :</label>
          <input
            {...register("role", {
              required: "role Required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Please enter a Only character",
              },
            })}
            className="border border-gray-400 rounded-md px-2"
          />
          {errors.role && (
            <small className="text-red-500 block ml-[120px]">
              {errors.role.message}
            </small>
          )}
        </div>
        <div className="mt-5">
          <label className="block">Image:</label>
          <input
            type="file"
            {...register("img", { required: "choose Image File" })}
            className="w-[200px] border border-gray-400 rounded-md px-2"
          />
          {errors?.img && (
            <small className="text-red-500 ml-[120px]">
              {errors?.img?.message}
            </small>
          )}
        </div>

        <div className="flex justify-left mt-7">
          <button
            type="submit"
            className="w-16 h-8 p-3 rounded-md border bg-[#91D273] border-black flex justify-center items-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
