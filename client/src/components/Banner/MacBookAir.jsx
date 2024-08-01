import React from "react";
import banner2 from "../../images/banner2.png";

const MacBookAir = () => {
  return (
    <div className="mt-4 py-12   bg-[#f5f5f7] w-full ">
      <div className="w-[37%] m-auto">
        <div className="text-[#1b1b1b]">
          <h1 className="font-custom font-semibold text-6xl text-center">
            MacBook Air
          </h1>
          <p className="font-custom mt-2 font-medium text-3xl text-center">
            Lean.Mean.M3 machine.
          </p>
        </div>
        <div className="flex justify-between w-[39%] m-auto mt-4">
          <button className="rounded-full border border-[#1d77d1]  text-lg p-2 px-4 text-white bg-[#1d77d1]">
            Learn more
          </button>
          <button className="rounded-full border border-[#1d77d1] text-lg p-2 px-6 text-[#1d77d1] hover:text-white hover:bg-[#1d77d1]">
            Buy
          </button>
        </div>
        <img src={banner2} alt="MacBook Air" className="w-[100%] mt-6 pt-4" />
      </div>
    </div>
  );
};

export default MacBookAir;
