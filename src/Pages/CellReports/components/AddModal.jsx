import { useState } from "react";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";


export default function AddModal({setPerson, person}) {
  let [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState({
    id: person.length+1,
    name: "",
    gender: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
  const userExists = person.some((el) => el.name.toLowerCase() === user.name.toLowerCase())

    const validationErrors = {};

    if(userExists){
        
        toast.error("User Already Existed")
    }
    else{
      if (!user.name) {
        validationErrors.name = "Name is required";
      }
  
      
      if (!user.gender) {
        validationErrors.gender = "Gender is required";
      }
      
      if (!user.role) {
        validationErrors.email = "Role is required";
      }
      if (Object.keys(validationErrors).length === 0) {
          setPerson([user,...person])
          toast.success("New User Added")
        }
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
          <Dialog.Title className={"font-semibold"}>Add details</Dialog.Title>
          <div className="mt-5">
            <form className="w-full" onSubmit={handleSubmit}>
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
            </form>
            
          </div>
        </Dialog.Panel>
        {/* <div>
          <Toaster />
        </div> */}
      </div>
    </Dialog>
  );
}
