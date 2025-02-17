import React from "react"

function AboutComponent() {
  return (
    <section className="flex items-center justify-center h-840  bg-[#CAF0F8] py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src="images/home/home1.png"
              alt="Home Image"
              className="w-full max-w-[500px] mx-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Your Main Heading</h1>
            <h3 className="text-2xl font-semibold mb-3">Your Subheading</h3>
            <p className="text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, sapiente magnam dicta repellendus tenetur pariatur?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
