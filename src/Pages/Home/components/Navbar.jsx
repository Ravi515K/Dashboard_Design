import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "src/components/SearchBar";


function Navbar() {
  // const navigate = useNavigate();
  // const searchRef = useRef(null);
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
 

  // const pages = [
  //   { id: 1, title: "Home", path: "/" },
  //   { id: 3, title: "Users", path: "/users" },
  // ];
  // const handleInput = (e) => {
  //   setSearchQuery(e.target.value);
  //   setShowDropdown(true)
  // };



  // const handlePageClick = (path) => {
  //   navigate(path);
  //   setSearchQuery("");
  //   setShowDropdown(false)
  // };

  // const filteredPages = pages.filter((page) =>
  //   page.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // useEffect(()=>{
  //   const handleKeypress = (e) => {
  //     if(e.key=="/"){
  //       e.preventDefault()
  //       searchRef.current.focus()
  //     }
  //   }
  //   document.addEventListener("keypress", handleKeypress)
  //   return ()=>{
  //     document.removeEventListener("keypress", handleKeypress)
  //   } 
  // })
  return (
    <div>
      <nav className="lg:w-[50%] flex  sm:text-center md:text-left    fixed top-0 p-[20px] bg-white z-40">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-brown text-sm">4th August 2023</p>
        </div>
        <div className="w-[100%] px-3">
          {/* <input
            value={searchQuery}
            onChange={(e) => handleInput(e)}
            ref={searchRef}
            type="text"
            placeholder="Search Page"
            className="border text-center rounded-full border-black w-[150px] h-[30px]"
          />
          {showDropdown && searchQuery !== "" && (
            <ul className="text-center shadow-md mt-2">
              {filteredPages.length > 0 ? (
                filteredPages.map((page) => (
                  <li key={page.id} onClick={() => handlePageClick(page.path)} className="cursor-pointer">
                    {page.title}
                  </li>
                ))
              ) : (
                <p>Page Not found</p>
              )}
            </ul>
          )} */}
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
