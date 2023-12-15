import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";
import { Listbox } from "@headlessui/react";
import { useState } from "react";

const genderOptions = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
];

export default function ReactForm({ setPerson, person, setIsOpen }) {
  let id = person.length + 1;
  const [selectedGender, setSelectedGender] = useState(genderOptions[0]);
  const {
    register,
    handleSubmit,
    watch,
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

  const validateImage = (file) => {
    const allowedTypes = ["image/png", "image/svg+xml", "image/jpeg"];
    const maxSize = 50 * 1024;

    if (!allowedTypes.includes(file.type)) {
      return "Invalid file type. Please select a PNG, SVG, or JPEG file.";
    }

    if (file.size > maxSize) {
      return "File size exceeds 50KB limit.";
    }

    return true;
  };

  const handleAdd = async (data) => {
    const file = data.img[0];

    const validationResult = validateImage(file);

    if (validationResult !== true) {
      toast.error(validationResult);
      return;
    }

    const imageUrl = await convertImageToUrl(file);
    setValue("img", imageUrl);
    data["img"] = imageUrl;

    const userExists = person.some(
      (el) => el.name.toLowerCase() === data.name.toLowerCase()
    );

    if (userExists) {
      toast.error(
        <>
          <div className="flex">
            <span> Sorry, User Already Selected</span>

            <button
              onClick={() => toast.dismiss()}
              className="border border-black relative ms-2 p-0.5 rounded-full"
            >
              <IoIosClose />
            </button>
          </div>
        </>
      );
    } else {
      setPerson([data, ...person]);
      toast.success(
        <>
          <div className="flex">
            <span>User Added Succefully</span>
            <button
              onClick={() => toast.dismiss()}
              className="border border-black relative ms-2 p-0.5 rounded-full"
            >
              <IoIosClose />
            </button>
          </div>
        </>
      );
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
                value: /^[A-Za-z][A-Za-z ]*$/,
                message: "Please enter a Only character",
              },
            })}
            className="block border border-gray-400 rounded-md px-2"
          />
          {errors.name && (
            <small className="text-red-500 ml-8">{errors.name.message}</small>
          )}
        </div>

        {/* <div className="mt-5">
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
        </div> */}
        <div className="mt-5">
          <label className="block">Gender:</label>
          <Listbox
            value={selectedGender.value}
            onChange={(gender) => {
              console.log(gender);
              setSelectedGender(gender);
              setValue("gender", gender);
            }}
          >
            <Listbox.Button
              className={"border border-red-500"}
              {...register("gender", { required: "gender is required" })}
            >
              {selectedGender.name || selectedGender}
            </Listbox.Button>
            <Listbox.Options>
              {genderOptions.map((option, ind) => (
                <Listbox.Option
                  key={option}
                  value={option.value}
                  className={"border border-green-500"}
                >
                  {({ selected }) => (
                    <div
                      className={`${
                        selected
                          ? "bg-blue-500 text-white border border-black"
                          : "bg-white text-black border border-black"
                      } cursor-pointer`}
                    >
                      {option.name}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          {errors.gender && (
            <small className="text-red-500 block ml-[120px]">
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
            accept=".png, .svg, .jpg"
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
