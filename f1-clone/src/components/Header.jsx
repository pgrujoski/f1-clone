// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-700 p-4 flex items-center justify-between">
      <div>
        <img
          src="https://media.formula1.com/image/upload/f_auto,c_limit,w_195,q_auto/etc/designs/fom-website/images/f1_logo"
          alt="f1 logo"
          className="h-10"
        />
      </div>
      <div className="flex space-x-4">
        <Link to="/drivers" className="text-white font-bold">
          Drivers
        </Link>
        <Link to="/meetings" className="text-white font-bold">
          Schedule
        </Link>
        <Link to="/car-data" className="text-white font-bold">
          Cars
        </Link>
      </div>
      <div>
        <button className="bg-white text-black py-2 px-4 rounded mx-2">
          Sign in
        </button>
        <button className="bg-yellow-400 text-black py-2 px-4 rounded mx-2">
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
