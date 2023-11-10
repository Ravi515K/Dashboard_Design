import React from "react";
import Sidebar from "./LeftSection/sidebar";
import Profile from "./LeftSection/Profile";
import { useSelector } from "react-redux";
import TeamMember from "./RightSection/TeamMember";

function DetailPage() {
  const obj = useSelector((state) => state.AddMember.singleData);
  console.log(obj);
  return (
    <div>
      <div>
        <div className="w-1/4 md:w-1/5">
          <div className="hidden lg:block md:block">
            {" "}
            <Sidebar className="h-200" />
          </div>
          <div className="hidden lg:block md:block">
            <Profile />
          </div>
        </div>
      </div>
      <div>
        <h1>Team Member</h1>
        {/* <div>
                    <div>
                        <img src={obj[0].imgUrl} />
                    </div>
                    <h2>{obj[0].name}</h2>
                    <h4>{obj[0].role}</h4>
                </div> */}
        <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
          <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
          <div class="flex justify-center -mt-8">
            <img
              src={obj[0].imgUrl}
              class="rounded-full border-solid border-white border-2 -mt-3"
            />
          </div>
          <div class="text-center px-3 pb-6 pt-2">
            <h3 class="text-black text-sm bold font-sans ">{obj[0].name}</h3>
            <p class="mt-2 font-sans font-light text-black">
              {`Hello, I'm from ${obj[0].role} background!`}
            </p>
          </div>
         <h1>red</h1>
        </div>
      </div>
      <div>
        <TeamMember />
      </div>
    </div>
  );
}

export default DetailPage;

//

{
  /* <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
  	<img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
    <div class="flex justify-center -mt-8">
        <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3">		
    </div>
	<div class="text-center px-3 pb-6 pt-2">
		<h3 class="text-white text-sm bold font-sans">Olivia Dunham</h3>
		<p class="mt-2 font-sans font-light text-white">Hello, i'm from another the other side!</p>
	</div>
  	<div class="flex justify-center pb-3 text-white">
      <div class="text-center mr-3 border-r pr-3">
        <h2>34</h2>
        <span>Photos</span>
      </div>
      <div class="text-center">
        <h2>42</h2>
        <span>Friends</span>
      </div>
  	</div> 
</div> */
}
//
