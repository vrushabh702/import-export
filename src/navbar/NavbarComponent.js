function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <nav className="bg-[#4CC9F0] p-4 flex items-center justify-between mt-5 ms-5 me-5 ">
        <div className="text-black font-bold text-lg">LOGO</div>

        <div className="flex space-x-6 text-[#1D3557] font-semibold">
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
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="border border-[#1D3557] rounded-full pl-10 pr-4 py-1 text-[#1D3557] outline-none"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1D3557]">
            🔍
          </span>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent
