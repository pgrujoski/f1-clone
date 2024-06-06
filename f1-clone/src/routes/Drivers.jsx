import React, { useEffect, useState } from "react";
import DriverCard from "../components/DriverCard";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchF1Drivers = async () => {
      try {
        const f1Drivers = await fetch("https://api.openf1.org/v1/drivers", {
          method: "GET",
        });
        const f1DriversData = await f1Drivers.json();
        const newF1Data = f1DriversData?.slice(0, 50);

        const filteredDrivers = newF1Data.filter(
          (driver) => driver.headshot_url && driver.full_name
        );

        setDrivers(filteredDrivers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchF1Drivers();
  }, []);

  return (
    <div className="driversRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {drivers?.map((driver, i) => (
        <DriverCard
          key={i}
          team_color={driver.team_colour}
          driver_name={driver.full_name}
          driver_img={driver.headshot_url}
          country_code={driver.country_code}
          team_name={driver.team_name}
          session_key={driver.session_key}
          driver_number={driver.driver_number}
        />
      ))}
    </div>
  );
};

export default Drivers;
