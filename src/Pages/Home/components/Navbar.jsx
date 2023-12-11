import SearchBar from "src/components/SearchBar";



function Navbar() {
  
  return (
    <div>
      <nav className="lg:w-[50%] flex  sm:text-center md:text-left    fixed top-0 p-[20px] bg-white z-40">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-brown text-sm">4th August 2023</p>
        </div>
        <div className="w-[100%] px-3">
          <SearchBar />
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
