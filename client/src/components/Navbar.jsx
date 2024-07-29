import React from "react";

const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
  "🔍",
  "💼",
];

const Navbar = () => {
  return (
    <nav className="bg-[#434344] text-[#c4c4c5] text-center p-2 py-3 fixed top-0 left-0 w-full z-50">
      <div className="w-[70%] m-auto flex justify-between text-xs font-semibold">
        <p>logo</p>
        {navItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
