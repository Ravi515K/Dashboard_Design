import React, { useState } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { FaChartBar, FaMoneyBill, FaUsers, FaFileAlt, FaCog } from 'react-icons/fa';
import { AiOutlineNumber } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router';

function Sidebar1({ index }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);
  const [sidebarItems, setSidebarItems] = useState([
    { text: 'Dashboard' },
    { text: 'Statistics' },
    { text: 'Transaction' },
    { text: 'Users' },
    { text: 'Cell Reports' },
    { text: 'Settings' },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleUser = () => {
    navigate('/users');
  };

  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData('index', index);
  };

  const handleDragOver = (index) => (event) => {
    event.preventDefault();
    const draggedOverIndex = index;
    const draggedIndex = parseInt(event.dataTransfer.getData('index'));

    if (draggedIndex !== draggedOverIndex) {
      // Swap the items in the array
      const updatedSidebarItems = [...sidebarItems];
      const [draggedItem] = updatedSidebarItems.splice(draggedIndex, 1);
      updatedSidebarItems.splice(draggedOverIndex, 0, draggedItem);

      setSidebarItems(updatedSidebarItems);
    }
  };

  const handleDragEnd = () => {
    // Perform any additional actions after the drag-and-drop operation
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    // Handle the item click logic here
    console.log('Item clicked:', sidebarItems[index]);
  };

  return (
    <div className="lg:w-1/4 md:w-1/3 w-2/5 text-#4A4D4A px-4 mt-[-15px]">
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="block text-3xl py-4 px-4">
          ☰
        </button>
      </div>
      {!showMenu ? (
        <div className="hidden lg:block lg:w-1/4 md:w-1/3 w-2/5 text-#4A4D4A p-4 ">
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
          <ul className="ul-sidebar">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center rounded-lg py-2 my-2 ${
                  activeIndex === index ? 'bg-light-green' : ''
                }`}
                onClick={() => handleItemClick(index)}
                draggable
                onDragStart={handleDragStart(index)}
                onDragOver={handleDragOver(index)}
                onDragEnd={handleDragEnd}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={`${
            showMenu ? 'translate-x-0' : '-translate-x-[100%]'
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
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center bg-light-green rounded-lg py-2 my-2"
              >
                {item.text}
              </li>
            ))}
          </ul>
          <div className="profile mt-[150px] ml-[-30px]">
            <div className="flex justify-center">
              <img
                className="w-50 h-50 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              />
            </div>
            <h1 className="font-semibold flex justify-center">Nora Watson</h1>
            <p className="text-10 text-brown flex justify-center">
              Sales Manager
            </p>
            <div className="flex mt-10 justify-center">
              <FiLogOut className="mt-1 " />
              <h2 className="font-semibold ml-6">Log Out</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar1;
