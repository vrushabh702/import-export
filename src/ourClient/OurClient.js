import React from "react"

function OurClientComponent() {
  return (
    <section className="relative flex items-center justify-center bg-blue1 h-[957px]">
      <img
        src="images/ourClient/ourClient.png"
        alt="Home Image"
        className="h-[600px] w-full object-cover opacity-[100%]"
      />
      <div className="absolute ">
        <h1 className="text-8xl text-bold text-center text-white">“Our clients”</h1>
        <div className="flex flex-col items-center justify-center space-y-[9px] h-[600px]">
          {/* Client Stats - Static content */}
          <div className="grid grid-cols-6 gap-4">
            <span className="text-[#4DE1FF] col-span-1 text-7xl font-bold">
              50+
            </span>
            <span className="text-white col-span-2 text-7xl">
              Happy customers
            </span>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <span className="text-[#4DE1FF] col-span-1 text-7xl font-bold">
              20+
            </span>
            <span className="text-white col-span-2 text-7xl">
              Partners
            </span>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <span className="text-[#4DE1FF] col-span-1 text-7xl font-bold">
              10+
            </span>
            <span className="text-white col-span-2 text-7xl">
              Collaborations
            </span>
          </div>
        </div>


          <div className="grid grid-cols-1 bg-white h-[150px]  w-[1920px] md:grid-cols-6 py-[36px]  overflow-x-hidden">
                <img
                  src="images/ourWork/svg/Google.png"
                  alt="Twitter"
                  className="w-[175px] h-[53px] object-full cursor-pointer"
                />
                <img
                  src="images/ourWork/svg/Pinterest.png"
                  alt="Twitter"
                  className="w-[175px] h-[53px] object-full cursor-pointer"
                />
                <img
                  src="images/ourWork/svg/Reddit.png"
                  alt="Twitter"
                  className="w-[175px] h-[53px] object-full cursor-pointer"
                />
                <img
                  src="images/ourWork/svg/Spotify.png"
                  alt="Twitter"
                  className="w-[175px] h-[53px] object-full cursor-pointer"
                />
                <img
                  src="images/ourWork/svg/Stripe.png"
                  alt="Twitter"
                  className="w-[175px] h-[53px] object-full cursor-pointer"
                />
                <img
                  src="images/ourWork/svg/Google.png"
                  alt="Twitter"
                  className="w-[175px] h-[53px] object-full cursor-pointer"
                />
        </div>
      </div>
    </section>
  )
}

export default OurClientComponent
