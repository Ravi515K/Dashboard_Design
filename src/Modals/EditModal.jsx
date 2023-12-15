import {
  useMutation,
  useQueryClient
} from "@tanstack/react-query";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  closeEditModal
} from "../Redux/Slices/AddMember/AddMember";
import GlobalForm from "src/components/GlobalForm";
import useFetch from "src/customHook/useFetch";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

function EditModal() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {cacheData} = useFetch()
  const id = useSelector((state) => state.AddMember.delete_Id);
 // console.log(id)
  const singleData = queryClient.getQueryData(['member'])?.find((el)=>{return el.id==id})
 // console.log(singleData)
  // const [formData, setFormData] = useState({
  //   id: singleData.id,
  //   name: singleData.name,
  //   email: singleData.email,
  //   gender:singleData.gender,
  //   status: "inactive",
  // });
  // const [errors, setErrors] = useState({});

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   if (e.target.type === "radio") {
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   }
  // };

  //   const handleImageUpload = (e) => {
  //     const file = e.target.files[0];
  //    // console.log(e.target.files)
  //     // Check if a file is selected
  //     if (file) {
  //         // Perform file type validation here if needed

  //         // Update the formData state with the selected file
  //         setFormData({
  //             ...formData,
  //             imgFile: file
  //         });

  //         // Convert the file to a URL
  //         const imgUrl = URL.createObjectURL(file);
  //         setFormData({
  //             ...formData,
  //             imgUrl: imgUrl
  //         });
  //     }
  // };

  const onSubmit = (data) => {
  const nameExist = cacheData.some(el=>el.name.toLowerCase() == data.name.toLowerCase())
  
   if(nameExist){
    toast.error(
    <>
      <div className="flex">
        <span>User Already Selected</span>

        <button
          onClick={() => toast.dismiss()}
          className="border border-black relative ms-2 p-0.5 rounded-full"
        >
          <IoIosClose />
        </button>
      </div>
    </>
    );
    }else{
       mutation.mutate(data);
       dispatch(addData(data));
       dispatch(closeEditModal());
       toast.success(<>
        <div className="flex">
          <span>User Added Succefully</span>

          <button
            onClick={() => toast.dismiss()}
            className="border border-black relative ms-2 p-0.5 rounded-full"
          >
            <IoIosClose />
          </button>
        </div>
      </>);
    }
    
  };

  const editData = async (formData) => {
   
    const res = await fetch(
      `https://gorest.co.in/public/v2/users/${singleData.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 39c73ae0c166fedbeb5c0b6e5b79dbf0c251b0c68f0485d6686687ab9c76c18e",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();
    return data;
  };
  
  const mutation = useMutation({
    mutationFn: (formData) => {
      return editData(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["member"] });
    },
  });
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40">
      <GlobalForm onSubmit={onSubmit} h1={"Edit Member"} modalAction={closeEditModal} singleData={singleData}/>
    </div>
  );
}

export default EditModal;
