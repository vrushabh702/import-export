import React from "react"

function AboutComponent() {
  return (
    <section className="flex items-center justify-center h-840   bg-blue9 py-9  mt-5">
      <div className="container mx-0 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src="images/about/about.png"
              alt="Home Image"
              className="w-full max-w-[918.63px] h-[640px]"
            />
          </div>

          {/* Right Side - Text */}
          <div className=" space-y-[48px] box-border">
            <h1 className="text-7xl text-blue2 font-bold mb-4">About</h1>
            <h3 className="text-5xl text-blue3 font-bold mb-3 ms-20">
              TradeLinkGlobal
            </h3>
            <p className="text-4xl font-semibold  text-black">
              Insights and Resources to help drive your Business Forward Faster.
            </p>
            <p className="text-2xl font-text text-black text-left">
              We build results-oriented brand strategy and continually refine
              the campaign for the greatest outcome. From full scale branding
              strategy, we are reaching to almost desired buyers throughout the
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
