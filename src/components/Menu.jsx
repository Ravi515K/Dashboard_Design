import React, { useRef, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import {Link} from 'react-router-dom'
import {
  FaChartBar,
  FaMoneyBill,
  FaUsers,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";
function Menu({index}) {
    const [activeIndex, setActiveIndex] = useState(index);
    const [arr, setArr] = useState([
        {icon:<BiSolidDashboard/>,name:'Dashboard',path:"/",id:1},
        {icon:<FaChartBar/>,name:'Statics',id:2},
        {icon:<FaMoneyBill/>,name:'Transaction',path:"/",id:3},
        {icon:<FaUsers/>,name:'Users',path:"/users",id:4},
        {icon:<FaFileAlt/>,name:'Cell Reports',path:"/",id:5},
        {icon:<FaCog/>,name:'Settings',path:"/",id:6},
    ])
    const dragItem = useRef(null)
    const dragOverItem = useRef(null)
    
   

    const handleSort = () =>{
      console.log(dragItem,'dragItem')
      let data = [...arr]

      const draggedItemContent = data.splice(dragItem.current, 1)[0]
       // console.log(draggedItemContent,"current obj")
        data.splice(dragOverItem.current,0,draggedItemContent)
        // reset the ref position
        dragItem.current = null;
        dragOverItem.current = null;

        // set New Arr
        setArr(data)
    }
  return (
    <>
      {arr.map((item,ind)=>{
        return (
             <Link to={item.path}>
            <li
             key={item.id}
                draggable
                onDragStart={(e)=>dragItem.current=ind}
                onDragEnter={(e)=>dragOverItem.current=ind}
                onDragEnd={handleSort}
                onDragOver={(e)=>e.preventDefault()}
            className={`flex items-center  rounded-lg py-2 my-2 ${
              activeIndex === ind ? "bg-light-green" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
          <span className="mr-4 ml-2">{item.icon}</span>  {item.name}
          </li>
           </Link>
        )
      })}
    
      
    </>
  );
}

export default Menu;









{/* <li
        draggable
        onDragStart={() => handleDragStart(1)}
        onDragOver={() => handleDragOver(1)}
        onDrop={handleDrop}
        className="flex items-center py-2 my-2"
      >
       { `< ${item.icon} className="mr-4 ml-2" /> `} {item.name}
      </li>
      <li
        draggable
        onDragStart={() => handleDragStart(2)}
        onDragOver={() => handleDragOver(2)}
        onDrop={handleDrop}
        className="flex items-center py-2 my-2"
      >
        { `< ${arr[2].icon} className="mr-4 ml-2" /> `} {arr[2].name}
      </li>
      <li
        className={`flex items-center rounded-lg py-2 my-2 cursor-pointer ${
          activeIndex === 3 ? "bg-light-green" : ""
        }`}
        onClick={() => {
          handleUser();
        }}
        draggable
        onDragStart={() => handleDragStart(3)}
        onDragOver={() => handleDragOver(3)}
        onDrop={handleDrop}
      >
        { `< ${item.icon} className="mr-4 ml-2" /> `} {item.name}
      </li>
      <li
        draggable
        onDragStart={() => handleDragStart(4)}
        onDragOver={() => handleDragOver(4)}
        onDrop={handleDrop}
        className="flex items-center py-2 my-2"
      >
        { `< ${item.icon} className="mr-4 ml-2" /> `} {item.name}
      </li>
      <li
        draggable
        onDragStart={() => handleDragStart(5)}
        onDragOver={() => handleDragOver(5)}
        onDrop={handleDrop}
        className="flex items-center py-2 my-2"
      >
       { `< ${item.icon} className="mr-4 ml-2" /> `} {item.name}
      </li> */}