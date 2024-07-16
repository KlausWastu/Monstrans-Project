import React, { useEffect, useState } from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const CharacterByLocation = () => {
  const [savedAssignLocation, setSavedAssignLocation] = useState({});

  useEffect(() => {
    // Ambil data dari localStorage saat komponen dimuat
    const storedAssignLocation = localStorage.getItem("assignLocation");
    if (storedAssignLocation) {
      setSavedAssignLocation(JSON.parse(storedAssignLocation));
    }
  }, []);

  const locationNames = Object.keys(savedAssignLocation);

  return (
    <div className="character-by-location-container">
      <p className="title-header">Character By Location</p>
      {locationNames.length === 0 ? (
        <div className="notify-container">
          <p className="notify">
            Assign Location Empty, please Assign some Character first
          </p>
        </div>
      ) : (
        locationNames.map((locationName) => (
          <div key={locationName} className="character-location-container">
            <div className="assignlocation-container">
              <p>Assign Location</p>
              <Link
                to={`/location/${encodeURIComponent(locationName)}`}
                className="location-link"
              >
                {locationName}
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CharacterByLocation;
