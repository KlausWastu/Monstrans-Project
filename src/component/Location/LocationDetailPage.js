import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocationDetailPage = () => {
  const { locationName } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Ambil data karakter dari localStorage berdasarkan locationName
    const storedAssignLocation = localStorage.getItem("assignLocation");
    if (storedAssignLocation) {
      const savedAssignLocation = JSON.parse(storedAssignLocation);
      setCharacters(savedAssignLocation[locationName] || []);
    }
  }, [locationName]);

  return (
    <div className="location-detail-container">
      <h2>Characters at {locationName}</h2>
      <ul>
        {characters.map((characterId) => (
          <li key={characterId}>Character ID: {characterId}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationDetailPage;
