import React from "react"
import { Button } from "react-bootstrap"

function LandingPage() {
  return (
    <div className="LandingPage bg-[#CAF0F8]">
      <section className="row ">
        <div className="col-5 ">
          <div className=" absolute left-[126px] top-[357px] space-y-[47px]">
            <h1 className="fw-bold text-[#023E8A] text-5xl">
              TradeLinkGlobals
            </h1>
            <p className="fw-semibold text-[#0077B6] text-2xl text-left h-[82] ">
              Connecting Worlds, Exporting
              <br></br> Opportunities!!
            </p>
            <p className="fs-4 text-[#0096C7] ">
              Boost global business with our
              <br></br> highly recommended trading
              <br></br>company.
            </p>
            <Button
              size="lg"
              className="bg-[#03045E] text-[#ADE8F4] shadow-[0_4px_6px_0_#000000]"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="col-7 max-w-full overflow-hidden">
          <img
            src="images/home/home1.png"
            className="mt-5 w-auto h-auto max-w-full max-h-full opacity-100 border-0 outline-0 object-cover object-center"
            alt="home-logo"
          />
        </div>
      </section>
    </div>
  )
}

export default LandingPage
