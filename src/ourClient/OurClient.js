import React from "react"

function OurClientComponent() {
  return (
    <section className="relative flex items-center justify-center bg-blue1 h-[957px]">
      <img
        src="images/ourClient/ourClient.png"
        alt="Home Image"
        className="h-[600px] w-full object-cover opacity-[100%]"
      />
      <div className="absolute text-center">
        <h1 className="text-8xl text-bold text-white">“Our clients”</h1>
        <div className="px-[200px] space-y-[9px]">
          {/* Client Stats - Repeated 3 times */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid grid-cols-6 gap-4">
              <span className="text-[#4DE1FF] col-span-2 text-2xl font-bold">
                50+
              </span>
              <span className="text-white col-span-4 text-2xl">
                Happy customer
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClientComponent
