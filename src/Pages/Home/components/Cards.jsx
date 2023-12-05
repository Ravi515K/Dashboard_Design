import React from "react";
import { MdShoppingBag } from "react-icons/md";
import Navbar from "./Navbar";
import SingleCard from "src/components/SingleCard";
function Cards() {
  const cardData = [
    {
      icon: <MdShoppingBag />,
      heading: "Total Earning",
      follow: "242.65K",
      statement: "From the running month",
      clr: "bg-custom-blue",
    },
    {
      icon: <MdShoppingBag />,
      heading: "Average Earning",
      follow: "17.347.65K",
      statement: "Daily Earning of this month",
      clr: "bg-blue",
    },
    {
      icon: <MdShoppingBag />,
      heading: "Conversion rate",
      follow: "74.86K",
      statement: "+6.04 greater than last month",
      clr: "bg-green",
    },
  ];
  return (
    <div className="lg:w-[100%] ">
      <Navbar />
      <div className=" sm:grid-cols-1 md:gap-6 mx-auto max-w-[1200px] grid lg:grid-cols-3 md:grid-cols-2 py-[90px]">
        {cardData.map((el, index) => (
          <SingleCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
