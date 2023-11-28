import React from "react";
import { AiOutlineNumber } from 'react-icons/ai'
import { useNavigate } from "react-router";
function Home() {
  const navigate = useNavigate()
    const handleLogin = (e) => {

        navigate('/login')
      }
      const handleHome = () => {
        navigate('/dashboard')
      }
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
            <h1 className="font-bold text-[22px]" onClick={handleHome}>
              Dashboard
            </h1>
          </div>
          <div className="w-1/4 flex justify-end  items-center mr-10  p-5">
            <h1
              className="font-bold text-[22px] cursor-pointer"
              onClick={handleLogin}
            >
              LogIn
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center mt-[50px]">
      <h1 className="font-bold">This is the <span className="text-[25px]">Home</span>  Page of Travel Insurance Group</h1>
        <div className="flex justify-center">
          <img src="https://thumbs.dreamstime.com/b/time-to-travel-wooden-sign-beach-background-49509295.jpg?w=768" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
