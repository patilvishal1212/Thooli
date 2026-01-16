// import React from "react";
// import logo from "../../assets/images/navbar/thooli.png";
// import { Link } from "react-router-dom";
// import insta from "../../assets/images/footer/instagram.png";
// import face from "../../assets/images/footer/facebook.png";

// const MainFooter = () => {
//   return (
//     <section className="flex flex-col items-center justify-center py-28 bg-[#dfe9e7] border">
//       <img src={logo} alt="Logo" className="h-9 mb-6" />
//       <div className="flex flex-wrap justify-center gap-8 text-gray-700 mb-6 mt-8">
//         <Link to="/Terms" className="hover:text-cyan-600 text-[15px]">Terms of service</Link>
//         <Link to="/Privacy" className="hover:text-cyan-600 text-[15px]">Privacy policy</Link>
//         <Link to="/Shipping" className="hover:text-cyan-600 text-[15px]">Shipping policy</Link>
//         <Link to="/Refund" className="hover:text-cyan-600 text-[15px]">Refund policy</Link>
//         <Link to="/contact" className="hover:text-cyan-600 text-[15px]">Contact</Link>
//       </div>
//       <div className="flex gap-5">
//         <div className="flex flex-col items-center py-10">
//           <img src={insta} alt="Instagram" className="h-8 mb-1 cursor-pointer" />
//           <span className="text-sm text-gray-700"></span>
//         </div>
//         <div className="flex flex-col items-center py-10">
//           <img src={face} alt="Facebook" className="h-8 mb-1 cursor-pointer" />
//           <span className="text-sm text-gray-700"></span>
//         </div>
//       </div>
//       <div className="w-full max-w-10xl border mt-1"></div>
//         <p className="mt-5 text-[15px]">
//           © 2026 All rights reserved Thooli
//         </p>

//     </section>
//   );
// };

// export default MainFooter;




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
