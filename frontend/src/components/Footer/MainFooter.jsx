import React from "react";
import logo from "../../assets/images/navbar/thooli.png";
import { Link } from "react-router-dom";
import insta from "../../assets/images/footer/instagram.png";
import face from "../../assets/images/footer/facebook.png";

const MainFooter = () => {
  return (
    <>
      <section className="bg-[#dfe9e7] py-32">
        <div className="flex flex-col items-center">

          <img src={logo} alt="Logo" className="h-10 mb-14" />

          <div className="flex flex-wrap justify-center gap-12 text-gray-800 mb-20">
            <Link to="/Terms">Terms of service</Link>
            <Link to="/Privacy">Privacy policy</Link>
            <Link to="/Shipping">Shipping policy</Link>
            <Link to="/Refund">Refund policy</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="flex gap-6">
            <img src={insta} alt="Instagram" className="h-6 cursor-pointer" />
            <img src={face} alt="Facebook" className="h-6 cursor-pointer" />
          </div>

        </div>
      </section>

  
      <div className="bg-[#dfe9e7] border-t border-gray-400 py-8 text-center">
        <p className="text-sm text-gray-800">
          © 2026 All rights reserved Thooli
        </p>
      </div>
    </>
  );
};

export default MainFooter;
