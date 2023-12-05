import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

import PageData from "src/Utility/Utlity";
function Menu({ index }) {
  const [activeIndex, setActiveIndex] = useState(index);
  const [arr, setArr] = useState(PageData);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    console.log(dragItem, "dragItem");
    let data = [...arr];

    const draggedItemContent = data.splice(dragItem.current, 1)[0];

    data.splice(dragOverItem.current, 0, draggedItemContent);
    // reset the ref position
    dragItem.current = null;
    dragOverItem.current = null;

    setArr(data);
  };
  return (
    <>
      {arr.map(({ icon: Icon, name, id, path }, ind) => {
        return (
          <Link to={path}>
            <li
              key={id}
              draggable
              onDragStart={(e) => (dragItem.current = ind)}
              onDragEnter={(e) => (dragOverItem.current = ind)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              className={`flex items-center  rounded-lg py-2 my-2 ${
                activeIndex === ind ? "bg-light-green" : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              <span className="mr-4 ml-2">{<Icon/>}</span> {name}
            </li>
          </Link>
        );
      })}
    </>
  );
}

export default Menu;
