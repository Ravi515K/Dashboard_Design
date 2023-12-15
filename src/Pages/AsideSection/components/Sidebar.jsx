import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineNumber } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import {
  FaAngleDown,
  FaChartBar,
  FaCog,
  FaFileAlt,
  FaMoneyBill,
  FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import Menu from "../../../components/Menu";

function Sidebar({ index }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <aside className="lg:w-1/4 md:w-1/3 w-2/5 text-#4A4D4A px-4 mt-[-15px]">
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="block text-3xl py-4 px-4">
          ☰
        </button>
      </div>
      {!showMenu ? (
        <div className="hidden lg:block lg:w-1/4 md:w-1/3 w-2/5 text-#4A4D4A p-4">
          <div
            className="flex lg:w-1/4 md:w-1/3 w-2/5 text-#4A4D4A mb-[55px] cursor-pointer"
            onClick={goToHome}
          >
            <div className="mr-4 mt-2">
              <AiOutlineNumber />
            </div>
            <div>
              <h1 className="text-xl font-bold">Niond</h1>
            </div>
          </div>
          <div>
            <Disclosure defaultOpen={true}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-[200px] py-2 flex justify-evenly font-bold rounded-md border bg-[#bbd096] p-2 border-black">
                    Menu
                    <span className="mt-1">
                      <FaAngleDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5`}
                      />
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <ul className="ul-sidebar">
                      <Menu index={index} />
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      ) : (
        <div
          className={`${
            showMenu ? "translate-x-0" : "-translate-x-[100%]"
          } transform fixed top-0 left-0 w-[250px] h-screen bg-red shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="text-3xl">
              &#10005;
            </button>
          </div>
          <div className="flex lg:w-1/4 md:w-[20%] w-2/5 text-#4A4D4A mb-[40px]">
            <div className="mr-4 mt-2">
              <AiOutlineNumber />
            </div>
            <div>
              <h1 className="text-xl font-bold">Niond</h1>
            </div>
          </div>
          <ul className="ul-sidebar px-2">
            <li className="flex items-center bg-light-green rounded-lg py-2 my-2">
              <BiSolidDashboard className="mr-4 ml-2" /> Dashboard
            </li>
            <li className="flex items-center my-2">
              <FaChartBar className="mr-4 ml-2" /> Statistics
            </li>
            <li className="flex items-center my-2">
              <FaMoneyBill className="mr-4 ml-2" /> Transaction
            </li>
            <li className="flex items-center my-2">
              <FaUsers className="mr-4 ml-2" /> Users
            </li>
            <li className="flex items-center my-2">
              <FaFileAlt className="mr-4 ml-2" /> Cell Reports
            </li>
            <li className="flex items-center my-2">
              <FaCog className="mr-4 ml-2" /> Settings
            </li>
          </ul>
          
        </div>
      )}
  
    </aside>
  );
}

export default Sidebar;
