import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "super-secret-token123-semos");
    navigate("/");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Sign In</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Sign In
      </button>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignIn;
