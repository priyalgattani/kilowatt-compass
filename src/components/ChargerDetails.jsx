import React from "react";

function ChargerDetails({ charger, onClose }) {
  if (!charger) return null;

  const { AddressInfo, Connections } = charger;

  const handleRedirect = () => {
    if (AddressInfo.RelatedURL) {
      window.open(AddressInfo.RelatedURL, "_blank", "noopener,noreferrer");
    } else {
      alert("No additional information available for this charger.");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "300px",
        height: "100%",
        backgroundColor: "white",
        boxShadow: "-3px 0px 10px rgba(0, 0, 0, 0.2)",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <h3>{AddressInfo.Title || "Charger Info"}</h3>
      <p><strong>Location:</strong> {AddressInfo.AddressLine1 || "N/A"}</p>
      <p><strong>State:</strong> {AddressInfo.StateOrProvince || "Unknown"}</p>
      <p><strong>Type:</strong> {Connections?.[0]?.ConnectionType?.Title || "Unknown"}</p>
      <p><strong>Power:</strong> {Connections?.[0]?.PowerKW || "Unknown"} kW</p>

      <button
        onClick={handleRedirect}
        style={{
          marginTop: "10px",
          padding: "8px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        More Info
      </button>
    </div>
  );
}

export default ChargerDetails;
