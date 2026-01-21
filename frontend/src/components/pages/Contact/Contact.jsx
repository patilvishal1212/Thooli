import React from "react";
import Hero from "./Hero"; 
// Hero component is used for the top banner / heading section of the page

const Contact = () => {
  return (
    <div>
      {/* Hero section at the top (page title / banner) */}
      <Hero />

      {/* ================= MAIN BACKGROUND WRAPPER ================= */}
     
      <div className="bg-[#f6f8f6] py-16 px-4 h-60%">

        {/* ================= CONTENT CONTAINER ================= */}
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/*  LOGIN CARD  */}
         
          <div className="bg-white p-8 rounded-md shadow-sm">

            {/* Login heading */}
           
            <h2 className="text-2xl font-semibold mb-6">Login</h2>

            {/* -------- Username Label -------- */}
            {/* block → moves label to new line
                text-sm → small text
                font-medium → slightly bold
                mb-1 → small spacing */}
            <label className="block ">
              Username or email address <span className="text-red-500">*</span>
            </label>

            {/* Username Input */}
           
            <input
              type="text"
              className="w-full border border-gray-300  px-3 py-2 mb-4"
            />

            {/* Password  */}
            <label className="block text">
              Password <span className="text-red-500">*</span>
            </label>

            {/* Password Input Wrapper */}
           
            <div className="relative mb-4">
              {/* Password Input */}
              {/* pr-10 → extra padding on right for eye icon */}
              <input
                type="password"
                className="w-full border border-gray-300  px-3 py-2 pr-10 "
              />

            
            </div>

            {/* -------- Remember Me -------- */}
            
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" />
              <span className="text-sm">Remember me</span>
            </div>

            {/* Login Button */}
            {/* transition → smooth animation */}
            <button className="w-40 bg-white text-teal-400 py-3  hover:bg-teal-600 hover:text-white transition">
              LOG IN
            </button>

            {/* Forgot password link */}
            <p className="text-sm mt-4 text-gray-600 cursor-pointer">
              Lost your password?
            </p>
          </div>

          {/* REGISTER CARD  */}
          <div className="bg-white p-8 rounded-md shadow-sm">

            {/* Register heading */}
            <h2 className="text-2xl font-semibold mb-6">Register</h2>

            {/* Username */}
            <label className="block text-sm font-medium mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300  px-3 py-2 mb-4 "
            />

            {/* Email */}
            <label className="block text-sm font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300  px-3 py-2 mb-4 "
            />

            {/* Password */}
            <label className="block">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative mb-4">
              <input
                type="password"
                className="w-full border border-gray-300  px-3 py-2 pr-10 "
              />
              
            </div>

            {/* Info text */}
            {/* leading-relaxed → better line spacing */}
            <p className="text-sm  text-gray-600 mb-6 leading-relaxed">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account,
              and for other purposes described in our  <span className=" text-black">privacy policy.</span>
            </p>

            {/* Register Button */}
            <button className="w-40 bg-white text-teal-500 py-3  hover:bg-teal-600 hover:text-white">
              REGISTER
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
