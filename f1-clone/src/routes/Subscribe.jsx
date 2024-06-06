import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Subscription Page</h1>
      <p className="text-xl mb-4">
        This is a Formula 1 clone made using the{" "}
        <a
          href="https://openf1.org/"
          className="text-blue-500 hover:text-blue-300 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenF1 API
        </a>{" "}
        by Petar Grujoski.
      </p>
      <p className="text-xl mb-4">Visit my GitHub profile for more projects:</p>
      <a
        href="https://github.com/pgrujoski"
        className="text-xl text-blue-500 hover:text-blue-300 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/pgrujoski
      </a>
    </div>
  );
};

export default Subscribe;
