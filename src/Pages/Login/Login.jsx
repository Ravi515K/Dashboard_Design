import React, { useState } from "react";
import { AiOutlineNumber } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios-instance/apiInstance";
import { useForm } from "react-hook-form";

const Login = () => {
  const {register, handleSubmit, formState:{errors}} = useForm ()
  const navigate = useNavigate();


  const handleLogin = (formData) => {
    
    
    axiosInstance
      .post("/login", {
        email: formData.email,
        password: formData.password,
        device_name: "MacIntel",
      })
      .then((res) => {
        const token = res.data.token;

        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSignup = (e) => {
    navigate("/register");
  };
  const handleDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <div className=" border border-black bg-violet">
        <div className="flex">
          <div className="flex w-1/4 ml-10 p-5">
            <div className="mr-4 mt-2">
              <AiOutlineNumber />
            </div>
            <div>
              <h1 className="text-xl font-bold">Niond</h1>
            </div>
          </div>
          <div className="w-2/4 flex justify-center  items-center mr-10  p-5 cursor-pointer">
            <h1 className="font-bold text-[22px]" onClick={handleDashboard}>
              Dashboard
            </h1>
          </div>
          <div className="w-1/4 flex justify-end  items-center mr-10  p-5">
            <h1
              className="font-bold text-[22px] cursor-pointer"
              onClick={handleSignup}
            >
              SignUp
            </h1>
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center h-screen">
        <div className="w-96 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            {/* <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full border rounded-md py-2 px-3"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div> */}
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
                    message: "Please enter a valid email",
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
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password",{
                  required:"Password is Required",
                })}
              />
              {errors.password && (  <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>)}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-black py-2 px-4 rounded-md  hover:bg-custom-blue"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
