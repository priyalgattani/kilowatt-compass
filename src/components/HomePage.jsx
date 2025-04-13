import React, { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import axios from "axios";
import { FaChargingStation, FaLocationArrow, FaPlus, FaMinus, FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import Search from "./Search";

function HomePage() {
  const [chargers, setChargers] = useState([]);
  const [selectedCharger, setSelectedCharger] = useState(null);
  const [mapCenter, setMapCenter] = useState([28.6139, 77.2090]);
  const [userLocation, setUserLocation] = useState(null);
  const [zoom, setZoom] = useState(12);
  const [destination, setDestination] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = [position.coords.latitude, position.coords.longitude];
          console.log("User Location Set:", userLoc);
          setUserLocation(userLoc);
          setMapCenter(userLoc);
        },
        (error) => console.warn("Location access denied:", error.message)
      );
    }
  }, []);

  useEffect(() => {
    async function fetchChargers() {
      try {
        const response = await axios.get("https://api.openchargemap.io/v3/poi", {
          params: {
            key: "2f0423ba-f0b1-4d25-a89d-a3321eccd2b7",
            countrycode: "IN",
            latitude: mapCenter[0],
            longitude: mapCenter[1],
            distance: 999,
            maxresults: 9999,
            distanceunit: "KM",
            compact: true,
          },
        });

        if (response.data) {
          const filteredChargers = response.data.filter(
            (charger) => charger?.AddressInfo?.Latitude && charger?.AddressInfo?.Longitude
          );
          setChargers(filteredChargers);
        }
      } catch (error) {
        console.error("Error fetching chargers:", error);
      }
    }

    fetchChargers();
  }, [mapCenter]);

  const handleMapDoubleClick = ({ lat, lng }) => {
    const newDestination = { latitude: lat, longitude: lng, name: "Custom Location" };
    console.log("Destination Set:", newDestination);
    setDestination(newDestination);
  };

  const fetchDirections = async () => {
    if (!userLocation || !destination) {
      console.error("User location or destination is missing.");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
        {
          coordinates: [
            [userLocation[1], userLocation[0]],
            [destination.longitude, destination.latitude],
          ],
        },
        {
          headers: {
            "Authorization": "5b3ce3597851110001cf62481b6bca9cecb54fdb91dc47d80251e9c1",
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.data && response.data.features && response.data.features.length > 0) {
        const coordinates = response.data.features[0].geometry.coordinates;
        const formattedRoute = coordinates.map((coord) => [coord[1], coord[0]]);
        console.log("Formatted Route:", formattedRoute);
        setRoute(formattedRoute);
        setShowDirections(true);

        const bounds = formattedRoute.reduce(
          (acc, coord) => ({
            minLat: Math.min(acc.minLat, coord[0]),
            maxLat: Math.max(acc.maxLat, coord[0]),
            minLng: Math.min(acc.minLng, coord[1]),
            maxLng: Math.max(acc.maxLng, coord[1]),
          }),
          {
            minLat: Infinity,
            maxLat: -Infinity,
            minLng: Infinity,
            maxLng: -Infinity,
          }
        );

        setMapCenter([
          (bounds.minLat + bounds.maxLat) / 2,
          (bounds.minLng + bounds.maxLng) / 2,
        ]);
      }
    } catch (error) {
      console.error("Error fetching directions:", error);
    }
  };

  return (
    <div style={{ 
      position: "relative", 
      width: "100vw", 
      height: "100vh",
      overflow: "hidden",
      margin: 0,
      padding: 0 
    }}>
      <div style={{
        position: "absolute",
        top: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}>
        <Search
          onLocationSelect={(loc) => {
            setDestination(loc);
            setMapCenter([loc.latitude, loc.longitude]);
          }}
        />
      </div>

      <Map
        center={mapCenter}
        zoom={zoom}
        width="100vw"
        height="100vh"
        onDblClick={handleMapDoubleClick}
        onBoundsChanged={({ center, zoom }) => {
          setMapCenter(center);
          setZoom(zoom);
        }}
        style={{ margin: 0, padding: 0 }}
      >
        {userLocation && (
          <Marker width={30} anchor={userLocation}>
            <FaLocationArrow size={25} color="blue" />
          </Marker>
        )}

        {destination && (
          <Marker width={30} anchor={[destination.latitude, destination.longitude]}>
            <FaMapMarkerAlt size={25} color="red" />
          </Marker>
        )}

        {chargers.map((charger) => (
          <Marker key={charger.ID} width={30} anchor={[charger.AddressInfo.Latitude, charger.AddressInfo.Longitude]}
            onClick={() => setSelectedCharger(charger)}>
            <FaChargingStation size={20} color="green" />
          </Marker>
        ))}

        {showDirections && route && route.length > 0 && (
          route.map((coord, index) => (
            <Overlay 
              key={`route-point-${index}`}
              anchor={coord}
              offset={[0, 0]}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: 'red',
                  borderRadius: '50%',
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </Overlay>
          ))
        )}
      </Map>

      <div style={{ position: "absolute", bottom: "100px", right: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <button onClick={() => setZoom((prevZoom) => Math.min(prevZoom + 1, 18))} style={buttonStyle}>
          <FaPlus size={20} />
        </button>
        
        <button onClick={() => setZoom((prevZoom) => Math.max(prevZoom - 1, 5))} style={buttonStyle}>
          <FaMinus size={20} />
        </button>

        <button onClick={() => userLocation && setMapCenter(userLocation)} style={buttonStyle}>
          <FaLocationArrow size={20} color="blue" />
        </button>
      </div>

      {destination && (
        <button
          onClick={fetchDirections}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "blue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          <FaDirections /> Get Directions
        </button>
      )}
    </div>
  );
}

const buttonStyle = {
  background: "white",
  padding: "10px",
  borderRadius: "50%",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.3)",
  cursor: "pointer",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  border: "none"
};

export default HomePage;