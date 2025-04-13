import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function Search({ onLocationSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await axios.get("https://nominatim.openstreetmap.org/search", {
          params: {
            q: searchTerm,
            format: "json",
            countrycodes: "IN",
            limit: 5,
          },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleSelectSuggestion = (place) => {
    setSearchTerm(place.display_name);
    setSuggestions([]);
    onLocationSelect({
      latitude: parseFloat(place.lat),
      longitude: parseFloat(place.lon),
      name: place.display_name,
    });
  };

  return (
    <div style={{ position: "relative", width: "320px" }}>
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "25px",
          padding: "12px",
          backgroundColor: "white",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          width: "100%",
        }}
      >
        <FaSearch size={16} color="#888" style={{ marginRight: "8px" }} />
        <input
          type="text"
          placeholder="Search location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: "16px",
            background: "transparent",
          }}
        />
      </div>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "50px",
            left: "0",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            zIndex: 1000,
            padding: "5px 0",
            listStyle: "none",
            margin: "0",
          }}
        >
          {suggestions.map((place) => (
            <li
              key={place.place_id}
              onClick={() => handleSelectSuggestion(place)}
              style={{
                padding: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <FaMapMarkerAlt size={14} color="red" style={{ marginRight: "10px" }} />
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
