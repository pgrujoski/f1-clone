// src/components/DriverCard.jsx
import React from "react";
import { Link, createSearchParams } from "react-router-dom";

const DriverCard = ({
  driver_name,
  driver_img,
  country_code,
  team_name,
  team_color,
  driver_number,
  session_key,
}) => {
  const driver_name_lower_case = driver_name
    ?.split(" ")
    ?.join("_")
    ?.toLowerCase();

  return (
    <Link
      to={{
        pathname: `/driver/${driver_name_lower_case}`,
        search: `?${createSearchParams({
          driver_number,
          session_key,
        })}`,
      }}
      style={{ backgroundColor: `#${team_color}` }}
      className="driver-card-component p-4 m-2 rounded-lg shadow-lg text-white transform transition-transform hover:scale-105"
    >
      <div className="flex flex-col items-center">
        <h6 className="text-sm mb-2">{country_code}</h6>
        <img
          src={driver_img}
          alt={driver_name}
          className="w-24 h-24 object-contain mb-2 rounded-full"
        />
        <span className="text-center">
          <h5 className="text-lg font-bold">{driver_name}</h5>
          <h6 className="text-sm">{team_name}</h6>
        </span>
      </div>
    </Link>
  );
};

export default DriverCard;
