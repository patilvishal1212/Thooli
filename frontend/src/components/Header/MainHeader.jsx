import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/navbar/thooli.png";
import cart1 from "../../assets/images/navbar/cart.jpg";
import Search1 from "../../assets/images/navbar/search.png";
import dropdown from "../../assets/images/navbar/expand-arrow.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section className=" p-5 ">
      <section className="layout">

        <section className="flex items-center justify-between h-16 lg:hidden px-4">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex flex-col justify-center gap-1"
          >
            <span className={`h-0.5 w-6 bg-black transition ${menuOpen && "rotate-45 translate-y-1.5"}`} />
            <span className={`h-0.5 w-6 bg-black transition ${menuOpen && "opacity-0"}`} />
            <span className={`h-0.5 w-6 bg-black transition ${menuOpen && "-rotate-45 -translate-y-1.5"}`} />
          </button>

          {/* Logo (Center) */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 mx-auto" />
          </Link>

          {/* Search + Cart */}
          <section className="flex items-center gap-4">
            <button>
              <img src={Search1} alt="Search" className="h-5" />
            </button>

            <section className="relative">
              <img src={cart1} alt="Cart" className="h-6" />
              <span className="absolute -top-2  text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              </span>
            </section>
          </section>
        </section>

{/* dekstop sathi */}
        <section className="hidden lg:flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          {/* Center Menu */}
          <section className="flex items-center gap-8 font-medium text-gray-800 text-[18px]">

            <Link to="/" className="hover:text-cyan-600 ">Home</Link>

            {/* Dropdown */}
            <section className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 hover:text-cyan-600"
              >
                Product Categories
                <img
                  src={dropdown}
                  alt="arrow"
                  className={`h-4 transition ${open && "rotate-180"}`}
                />
              </button>

              {open && (
                <section className="absolute left-0 mt-2 w-72 max-h-105 overflow-y-auto bg-teal-400 border rounded-md shadow-xl z-50">
                  {[
                    "Thottil Starter Kit",
                    "Window Hanger",
                    "Adjustable Hanger",
                    "Cradle",
                    "Cradle Accessories",
                    "Cradle Combo",
                    "Cradle with Mosquito Net Set",
                    "Lullaby Toys",
                    "Feeding Pillow",
                    "Carry Nest",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </section>
              )}
            </section>

            <Link to="/sale">Sale</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/account">My Account</Link>
          </section>

          {/* Desktop Icons */}
          <section className="flex items-center gap-6">
            <img src={Search1} alt="Search" className="h-5" />
            <img src={cart1} alt="Cart" className="h-7" />
          </section>
        </section>
      </section>

      {/* Mobile cha menu  */}
      {menuOpen && (
        <section className="lg:hidden bg-white border-t">
          <section className="layout">
            <section className="flex flex-col items-center gap-4 py-6 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/categories" onClick={() => setMenuOpen(false)}>Product Categories</Link>
              <Link to="/sale" onClick={() => setMenuOpen(false)}>Sale</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/account" onClick={() => setMenuOpen(false)}>My Account</Link>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default Header;
