import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";

function TripPlanner() {
    const [chargingStations, setChargingStations] = useState([]);
    const [selectedStations, setSelectedStations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [userLocation, setUserLocation] = useState(null);

    // Get user location on load
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => console.warn("Location access denied.")
            );
        }
    }, []);

    // Fetch charging stations near selected location
    useEffect(() => {
        if (!selectedLocation) return;
        fetchNearestStations(selectedLocation.latitude, selectedLocation.longitude);
    }, [selectedLocation]);

    const fetchNearestStations = (lat, lng) => {
        axios
            .get("https://api.openchargemap.io/v3/poi", {
                params: {
                    key: "2f0423ba-f0b1-4d25-a89d-a3321eccd2b7",
                    countrycode: "IN",
                    latitude: lat,
                    longitude: lng,
                    distance: 25,  // Reduced to 25 km
                    distanceunit: "KM",
                    maxresults: 20,
                    compact: true,
                },
            })
            .then((response) => {
                const stations = response.data.map((station) => ({
                    id: station.ID,
                    name: station.AddressInfo.Title || "Unknown Station",
                    location: `${station.AddressInfo.AddressLine1 || "Unknown"}, ${station.AddressInfo.StateOrProvince || ""}`,
                    type: station.Connections?.[0]?.ConnectionType?.Title || "Unknown",
                    availability: station.StatusType?.IsOperational ? "Available" : "Unavailable",
                    price: station.UsageCost || "N/A",
                    distance: station.AddressInfo.Distance || "N/A",
                }));
                setChargingStations(stations);
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <div className="container mt-4">
            <div className="text-center">
                <h1>Nearby Charging Stations</h1>
                <p>
                    {selectedLocation
                        ? `Showing results near ${selectedLocation.name}`
                        : "Search for a location to find nearby stations"}
                </p>

                {/* Search Bar */}
                <div className="d-flex justify-content-center mb-4">
                    <Search
                        userLocation={userLocation}
                        onLocationSelect={(loc) => setSelectedLocation(loc)}
                    />
                </div>

                {/* Charging Stations List */}
                <div className="row">
                    {chargingStations.length > 0 ? (
                        chargingStations.map((station) => (
                            <div className="col-md-4 mb-4" key={station.id}>
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">{station.name}</h5>
                                        <p className="card-text">Location: {station.location}</p>
                                        <p className="card-text">Charger Type: {station.type}</p>
                                        <p className="card-text">Availability: {station.availability}</p>
                                        <p className="card-text">Price: {station.price}</p>
                                        <p className="card-text"><strong>Distance:</strong> {station.distance} km</p>
                                        <button className="btn btn-success" onClick={() => setSelectedStations([...selectedStations, station])}>
                                            Add to Trip
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Enter a location to search for nearby charging stations.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TripPlanner;
