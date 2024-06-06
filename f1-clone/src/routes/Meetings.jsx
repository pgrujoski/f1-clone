import React, { useEffect, useState } from "react";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await fetch(
          "https://api.openf1.org/v1/meetings?year=2023"
        );
        const data = await response.json();
        setMeetings(data);
      } catch (error) {
        console.error("Error fetching meetings data:", error);
      }
    };

    fetchMeetings();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Grand Prix Meetings 2023</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.meeting_key}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold">{meeting.meeting_name}</h2>
            <p>{meeting.meeting_official_name}</p>
            <p>
              {meeting.location}, {meeting.country_name}
            </p>
            <p>
              Start Date: {new Date(meeting.date_start).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetings;
