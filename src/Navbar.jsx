import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoMdDownload } from "react-icons/io";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-amber-500">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-20 font-medium">
          <Link to="/">
            <li className="text-amber-50 hover:text-amber-500 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-amber-50 hover:text-amber-500 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        {/* Resume Button (Desktop) */}
        <button className="hidden md:flex items-center gap-2 bg-amber-500 text-black px-5 py-2 rounded-lg hover:bg-amber-400">
          <IoMdDownload />
          Resume
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-amber-500 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-amber-500">
          <ul className="flex flex-col items-center gap-6 py-6">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className="text-amber-50 text-lg hover:text-amber-500">
                Home
              </li>
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <li className="text-amber-50 text-lg hover:text-amber-500">
                Contact
              </li>
            </Link>

            <button className="flex items-center gap-2 bg-amber-500 text-black px-6 py-2 rounded-lg hover:bg-amber-400">
              <IoMdDownload />
              Resume
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
