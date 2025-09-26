import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-start space-x-4">
          <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link to="/bus" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
            Bus
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;