import React from "react"

function ServiceComponent() {
  return (
    <div className="ServiceComponent h-[958px] bg-[#03045E] [space-y-54px]">
      {/* <div className="max-w-6xl mx-auto px-4 py-12 "> */}

      <h2 className="text-4xl font-bold text-blue8 text-center ">Services</h2>
      <section className="flex items-center justify-center min-h-screen bg-[#03045E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12  ">
            <div className="bg-blue9 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="images/services/steel.png"
                alt="Steel Products"
                className="w-full h-54 object-cover"
              />
              <div className="p-5 text-center space-y-[28px]">
                <h2 className="text-xl font-bold text-blue-900">
                  Steel Products
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas.
                </p>
                <button className="mt-4 bg-blue-900 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
                  Read more
                </button>
              </div>
            </div>

            <div className="bg-blue9 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="images/services/steel.png"
                alt="Steel Products"
                className="w-full h-54 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-bold text-blue-900">
                  Steel Products
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas.
                </p>
                <button className="mt-4 bg-blue-900 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
                  Read more
                </button>
              </div>
            </div>

            <div className="bg-blue9 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="images/services/steel.png"
                alt="Steel Products"
                className="w-full h-54 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-bold text-blue-900">
                  Steel Products
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quas.
                </p>
                <button className="mt-4 bg-blue-900 text-white py-2 px-5 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
    </div>
  )
}

export default ServiceComponent
