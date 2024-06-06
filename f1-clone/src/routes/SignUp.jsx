import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (username && password) {
      localStorage.setItem("token", "super-secret-token123-semos");
      navigate("/");
    } else {
      alert("Please enter a username and password.");
    }
  };

  const handleBackToLogin = () => {
    navigate("/signin");
  };

  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="bg-gray-800 text-white py-2 px-4 mb-4 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-800 text-white py-2 px-4 mb-4 rounded"
      />
      <button
        onClick={handleSignUp}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Sign Up
      </button>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded"
        onClick={handleBackToLogin}
      >
        Back to Sign In
      </button>
    </div>
  );
};

export default SignUp;
