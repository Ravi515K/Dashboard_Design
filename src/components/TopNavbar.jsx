import Message from "src/Pages/Home/components/Message";
import SearchBar from "src/components/SearchBar";



function TopNavbar() {
  
  return (
   
      <nav className="w-full flex  sm:text-center md:text-left    fixed top-0 p-[20px] bg-white z-40">
        <div className="w-[20%]">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-brown text-sm">4th August 2023</p>
        </div>
        <div className="w-[40%] ml-[-50px]">
          <SearchBar />
        </div>
        <div className="w-[35%] px-3"> <Message /></div>
       
      </nav>
   
  );
}

export default TopNavbar;
