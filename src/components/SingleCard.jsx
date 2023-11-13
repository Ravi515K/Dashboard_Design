import React from "react";

function SingleCard({data}) {
    const {icon,heading,follow, statement,clr} = data
  return (
    <div>
      <div className={`bg-${clr} w-200 h-100 p-2 rounded-lg`}>
        <ul>
          <li className="flex">
            {icon} {heading}
          </li>
        </ul>
        <h2 className="text-center">{follow}</h2>
        <p className="text-center text-sm">{statement}</p>
      </div>
    </div>
  );
}

export default SingleCard;
