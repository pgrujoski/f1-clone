import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-4">Page Not Found</p>
      <Link to="/" className="text-xl text-blue-500 underline">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
