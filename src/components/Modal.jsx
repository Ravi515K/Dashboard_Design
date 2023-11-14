import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, memberData, singleMemberData } from '../Redux/Slices/AddMember/AddMember';
function Modal() {
    const dispatch = useDispatch()
    const show = useSelector((state)=> state.AddMember.isModal)
    // console.log(show)
    const [formData, setFormData] = useState({
        id:new Date().getTime(),
        imgFile: null,
        imgUrl: "",
        name: "",
        role: "",
      });
      const [errors, setErrors] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleImageUpload = (e) => {
        const file = e.target.files[0];
       // console.log(e.target.files)
        // Check if a file is selected
        if (file) {
            // Perform file type validation here if needed

            // Update the formData state with the selected file
            setFormData({
                ...formData,
                imgFile: file
            });

            // Convert the file to a URL
            const imgUrl = URL.createObjectURL(file);
            setFormData({
                ...formData,
                imgUrl: imgUrl
            });
        }
    };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
    
        // Validate the imgUrl
        if (!formData.imgUrl) {
          validationErrors.imgUrl = "Image URL is required";
        }
    
        // Validate the name
        if (!formData.name) {
          validationErrors.name = "Name is required";
        }
    
        // Validate the role
        if (!formData.role) {
          validationErrors.role = "Role is required";
        }
    
        if (Object.keys(validationErrors).length === 0) {
          // Form is valid, you can submit the data or perform other actions
            
             dispatch(memberData(formData))
             dispatch(closeModal())
            //  dispatch(singleMemberData(formData.id))
             alert('Added Member Successfully')
          console.log("Form is valid. Data:", formData);

        } else {
          // Update the errors state
          setErrors(validationErrors);
        }
          
      };
    
      const handleClose = () =>{
            dispatch(closeModal())
      }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40'>
            
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className='flex justify-between'>
                    <div><h1 className='mb-[20px] font-semibold'>Add Member</h1></div>
                    <div onClick={handleClose}><RxCross1/></div>
                </div>
            
              
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className={`shadow appearance-none border ${errors.name ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <input
                        className={`shadow appearance-none border ${errors.role ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        placeholder="Role"
                    />
                    {errors.role && (
                        <p className="text-red-500 text-xs italic">{errors.role}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imgUrl">
                        Image
                    </label>
                    <input
                        className={`shadow appearance-none border ${errors.imgUrl ? "border-red-500" : "border-gray-300"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        type="file"
                        id="imgUrl"
                        // name="imgUrl"
                        accept="image/*"
                        // value={formData.imgUrl}
                        onChange={handleImageUpload}
                        placeholder="Image URL"
                        required
                    />
                    {errors.imgUrl && (
                        <p className="text-red-500 text-xs italic">{errors.imgUrl}</p>
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
    )
}

export default Modal
