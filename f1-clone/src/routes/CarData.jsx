import React, { useEffect, useState } from "react";

const CarData = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          "https://api.openf1.org/v1/car_data?driver_number=55&session_key=9159&speed>=315"
        );
        const data = await response.json();
        setCarData(data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, []);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Car Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carData.map((data, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Driver #{data.driver_number}
            </h2>
            <p>
              <span className="font-semibold">Speed:</span> {data.speed} km/h
            </p>
            <p>
              <span className="font-semibold">RPM:</span> {data.rpm}
            </p>
            <p>
              <span className="font-semibold">Gear:</span> {data.n_gear}
            </p>
            <p>
              <span className="font-semibold">Throttle:</span> {data.throttle}%
            </p>
            <p>
              <span className="font-semibold">Brake:</span> {data.brake}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarData;
