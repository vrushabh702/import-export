import React from "react"

function ExperienceComponent() {
  return (
    <section className="relative flex items-center justify-center bg-blue2 h-[600px] ">
      <img
        src="images/experience/experience1.png"
        alt="Home Image"
        className="h-[600px] w-full object-cover opacity-[80%]"
      />
      <div className="absolute w-[250px] top-[100px] left-[439px] h-[250px] bg-white py-[30px] px-[26px] rounded-2xl">
        <div className="space-y-[20px] justify-center text-center flex flex-col items-center ">
          <div className="w-[100px] h-[100px] bg-blue3 rounded-[20px] flex items-center justify-center">
            <img
              src="images/experience/customer.png"
              alt="customer"
              className=" w-[60px] h-[60px] justify-items-center  object-cover"
            />
          </div>
          <p className="text-bold text-2xl">150+</p>
          <p className="text-blue5 text-sm">Happy Buyers</p>
        </div>
      </div>
      <div className="absolute w-[250px] top-[250px]  left-[739px]  h-[250px] bg-white py-[30px] px-[26px] rounded-2xl">
        <div className="space-y-[20px] justify-center text-center flex flex-col items-center ">
          <div className="w-[100px] h-[100px] bg-blue3 rounded-[20px] flex items-center justify-center">
            <img
              src="images/experience/customer-satisfaction.png"
              alt="Consignment Done"
              className=" w-[60px] h-[60px] justify-items-center  object-cover"
            />
          </div>
          <p className="text-bold text-2xl">10+</p>
          <p className="text-blue5 text-sm">Years Experience</p>
        </div>
      </div>
      <div className="absolute w-[250px] top-[105px] left-[1039px]  h-[250px] bg-white py-[30px] px-[26px] rounded-2xl">
        <div className="space-y-[20px] justify-center text-center flex flex-col items-center ">
          <div className="w-[100px] h-[100px] bg-blue3 rounded-[20px] flex items-center justify-center">
            <img
              src="images/experience/shipping.png"
              alt="Consignment Done"
              className=" w-[60px] h-[60px] justify-items-center  object-cover"
            />
          </div>
          <p className="text-bold text-2xl">1500+</p>
          <p className="text-blue5 text-sm">Consignment Done</p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceComponent
