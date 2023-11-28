// src/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineNumber, AiFillMessage, AiFillBell } from 'react-icons/ai'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const handleLogin = () => {
    navigate('/login')
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
               <h1 className="font-bold text-[22px] cursor-pointer" onClick={handleLogin}> Login</h1>
            </div>
            
        </div>
      </div>
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full border rounded-md py-2 px-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
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
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
