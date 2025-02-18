function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <nav className="bg-[#4CC9F0] p-4 flex items-center w-[1476px] h-[80px]  justify-between rounded-xl opacity-100 mx-auto">
        <div className="flex  space-x-[80px] text-blue2 font-semibold">
          <div className="text-black font-bold text-lg">LOGO</div>
          <a href="#" className="hover:text-black">
            Home
          </a>
          <div className="relative group">
            <a href="#" className="hover:text-black flex items-center">
              Company <span className="ml-1">▼</span>
            </a>
          </div>
          <div className="relative group">
            <a href="#" className="hover:text-black flex items-center">
              Product <span className="ml-1">▼</span>
            </a>
          </div>
          <a href="#" className="hover:text-black">
            Our Team
          </a>
          <a href="#" className="hover:text-black">
            Contact Us
          </a>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search here..."
              className="border border-[#1D3557] rounded-full pl-10 pr-4 py-1 text-[#404169] outline-none w-[500px] h-[40px]"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1D3557]">
              🔍
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent
