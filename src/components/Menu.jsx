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

        data.splice(dragOverItem.current,0,draggedItemContent)
        // reset the ref position
        dragItem.current = null;
        dragOverItem.current = null;

      
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









