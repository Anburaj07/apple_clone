import React from 'react'
import banner3 from "../../images/banner3.png";
const Iphone = () => {
  return (
    <div className="mt-4 bg-black w-full ">
        <div className='w-[30%] pt-10 m-auto'>

        <div className="text-white mt-4 w-[82%] m-auto">
          <h1 className="font-custom font-semibold text-5xl text-center">
            iPhone
          </h1>
          <p className="font-custom mt-2 font-medium text-2xl text-center">
            Our most powerful cameras yet.
          </p>
          <p className="font-custom mt-2 font-medium text-2xl text-center">
            Ultrafast chips.And USB-C.
          </p>
        </div>

        <div className="flex justify-between w-[65%] m-auto  mt-4">
          <button className="rounded-full border border-[#1d77d1]  text-lg p-2 px-4 text-white bg-[#1d77d1]">
            Learn more
          </button>
          <button className="rounded-full border border-[#1d77d1] text-lg p-2 px-6 text-[#1d77d1] hover:text-white hover:bg-[#1d77d1]">
            Shop iPhone
          </button>
        </div>
        </div>


    <div className="w-[35%] m-auto">
      <img src={banner3} alt="iPhone" className="w-[100%]" />
    </div>
  </div>
  )
}

export default Iphone