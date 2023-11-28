// src/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineNumber, AiFillMessage, AiFillBell } from 'react-icons/ai'
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    // Implement your login logic here
   // console.log("Username:", username);
   // console.log("Password:", password);

   axios.post('https://uatapicorporatetravel.fynity.in/api/login', {
  email: email,
  password: password,
  device_name: 'window',
}, {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
  .then((res) => {
    // Assuming the token is in the response data
    console.log(res.data.token ,"HII")
    const token = res.data.token;

    if (token) {
      // Save the token to localStorage
      localStorage.setItem('token', token);
      navigate("/home")
    }
  })
  .catch((err) => {
    console.error(err);
  });
      
  };

  const handleSignup = (e) => {

    navigate('/register')
  }
  const handleHome = () => {
    navigate('/home')
  }
  return (
    <div>
      <div className=" border border-black bg-violet">
      <div className='flex'>
            <div className='flex w-1/4 ml-10 p-5'>
                <div className='mr-4 mt-2'>
                    <AiOutlineNumber />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Niond</h1>
                </div>
            </div>
            <div className="w-2/4 flex justify-center  items-center mr-10  p-5 cursor-pointer">
               <h1 className="font-bold text-[22px]" onClick={handleHome}> Home</h1>
            </div>
            <div className="w-1/4 flex justify-end  items-center mr-10  p-5">
               <h1 className="font-bold text-[22px] cursor-pointer" onClick={handleSignup}> SignUp</h1>
            </div>
            
        </div>
      </div>
      <div className="grid items-center justify-center h-screen">
        <div className="w-96 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-md py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
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
