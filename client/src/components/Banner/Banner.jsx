import React from "react";
import banner1 from "../../images/banner1.png";
import Iphone from "./Iphone";
import MacBookAir from "./MacBookAir";
const Banner = () => {
  return (
    <>
      <div className="pt-20 p-6 bg-[#f5f5f7] w-full ">
        <div className="w-[36%] m-auto">
          <img src={banner1} alt="Mac" className="w-[100%]" />
        </div>
        <button className=" block w-[6%] m-auto mt-4 rounded-full border border-[#1d77d1] p-2 text-[#125699] font-medium">
          Shop
        </button>
      </div>
      <MacBookAir />
      <Iphone />
    </>
  );
};

export default Banner;
