import React from "react"

function OurWorkComponent() {
  return (
    <section className="flex items-center justify-center h-840   bg-white   ">
      <div className="container mx-0 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Right Side - Text */}
          <div className=" space-y-[43px] box-border">
            <h1 className="text-6xl text-blue3 font-bold mb-4">
              Introducing Our Work
            </h1>
            <h3 className="text-4xl text-black text-left font-semibold ">
              Tailoring services for global exporters with personalized
              attention.
            </h3>

            <p className="text-2xl font-text text-black text-left">
              Our creativity is driven by depth study in an effort to give you
              the best result and position of your product successfully in
              international market.
              <br></br>
              <br></br>
              We’re on a mission to start studying the exact market for your
              products worldwide and establish the product in appropriate
              market.
            </p>
          </div>

          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src="images/ourWork/forming-team-leadership.png"
              alt="Home Image"
              className="w-full max-w-[918.63px] h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWorkComponent
