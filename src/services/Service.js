import React from "react"

function ServiceComponent() {
  return (
    <section className="flex items-center justify-center h-full bg-[#03045E] py-10 ">
      {/* px-23 */}
      <div className="container mx-auto px-4">
        <h1 className="text-blue8 bg-blue1 text-7xl font-bold mb-10 text-center ">
          services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-40 ">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue7 to-transparent blur-xl"></div>
            <div className="relative bg-blue8 rounded-2xl shadow-xl overflow-hidden w-[457px] ">
              <img
                src="images/services/steel.png"
                alt="Steel Products"
                className="w-full h-54 object-cover"
              />
              <div className="p-[32px] text-center space-y-[26px] pt-[26px]">
                <p className="text-3xl font-bold  text-blue1">Steel Products</p>
                <p className="text-[#3B3F5C] text-xl  w-[393px] text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, dicta necessitatibus Quas.
                </p>
                <button className="bg-blue1 text-white text-2xl py-2 px-5 w-[350px] h-[60px] rounded-lg text-semibold font-medium hover:bg-blue3 transition">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue7 to-transparent blur-xl"></div>
            <div className="relative bg-blue8 rounded-2xl shadow-xl overflow-hidden w-[457px]">
              <img
                src="images/services/plastic.png"
                alt="plastic Products"
                className="w-full h-54 object-cover"
              />
              <div className="p-[32px] text-center space-y-[26px] pt-[26px]">
                <h2 className="text-3xl font-bold  text-blue1">
                  Plastic Products
                </h2>
                <p className="text-[#3B3F5C] text-xl text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, dicta necessitatibus Quas
                </p>
                <button className="bg-blue1 text-white text-2xl py-2 px-5 w-[350px] h-[60px] rounded-lg text-semibold font-medium hover:bg-blue3 transition">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="relative ">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue7 to-transparent blur-xl"></div>
            <div className="relative bg-blue8 rounded-2xl shadow-xl overflow-hidden w-[457px]">
              <img
                src="images/services/cement.png"
                alt="cement Products"
                className=" w-full h-54 object-cover"
              />
              <div className="p-[32px] text-center space-y-[26px] pt-[26px]">
                <h2 className="text-3xl font-bold text-blue1">
                  Cement Products
                </h2>
                <p className="text-[#3B3F5C] text-xl  text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi, dicta necessitatibus Quas
                </p>
                <button className="bg-blue1 text-white text-2xl py-2 px-5 w-[350px] h-[60px] rounded-lg text-semibold font-medium hover:bg-blue3 transition">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceComponent
