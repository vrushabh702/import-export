import React from "react"

function FooterComponent() {
  return (

    
<section className="relative flex flex-col min-h-screen bg-[#070819]">
  {/* Main Content Section */}
  <div className="flex items-center justify-center bg-[#070819] h-[636px]">
    <div className="w-[531px] h-[215px] text-white flex justify-between p-4">
      {/* Left Section: Products */}
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-bold">Products</p>
        <p>Features</p>
        <p>Integration</p>
        <p>Roadmap</p>
      </div>

      {/* Right Section: Company */}
      <div className="flex flex-col space-y-2">
        <p className="text-lg font-bold">Company</p>
        <p>About</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Licensed & Regulation</p>
      </div>
    </div>
  </div>

  {/* Footer Section at the bottom */}
  <div className="bg-[#090926] h-[72px] w-full py-[10px] px-[15px] flex justify-between items-center mt-auto">
    <div className="text-left text-xl text-blue4">
      <p>© 2025 All rights reserved by Vrushabh.</p>
    </div>
    <div className="text-right text-xl flex items-center justify-center text-blue4">
      <p className="mr-4">Terms of Services.</p>
      <p>Policy Services.</p>
    </div>
  </div>
</section>

  )
}

export default FooterComponent
