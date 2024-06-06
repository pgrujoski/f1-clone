import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Driver = () => {
  const [searchParams] = useSearchParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchF1Driver = async () => {
      try {
        const response = await fetch(
          `https://api.openf1.org/v1/drivers?driver_number=${searchParams.get(
            "driver_number"
          )}&session_key=${searchParams.get("session_key")}`
        );
        const data = await response.json();
        setDriver(data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchF1Driver();
  }, [searchParams]);

  if (!driver) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row items-start p-8 bg-gray-900 text-white shadow-lg min-h-screen">
      <div className="flex-shrink-0 flex flex-col items-center">
        <img
          src={driver.headshot_url}
          alt={driver.full_name}
          className="w-48 h-48 object-contain"
        />
        <div className="flex items-center mt-4 space-x-2">
          <span className="font-bold text-lg">{driver.country_code}</span>
          <span className="font-bold text-lg">#{driver.driver_number}</span>
        </div>
      </div>
      <div className="flex-grow lg:ml-16 mt-8 lg:mt-0">
        <h2 className="text-4xl font-bold mb-8 border-b-2 border-gray-700 pb-2">
          {driver.full_name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg">Team</h3>
            <p className="text-xl">{driver.team_name}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Country</h3>
            <p className="text-xl">{driver.country_code}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Podiums</h3>
            <p className="text-xl">0</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Points</h3>
            <p className="text-xl">536</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Grands Prix entered</h3>
            <p className="text-xl">214</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">World Championships</h3>
            <p className="text-xl">0</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Highest race finish</h3>
            <p className="text-xl">4 (x3)</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Highest grid position</h3>
            <p className="text-xl">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driver;
