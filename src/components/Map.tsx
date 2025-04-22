"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function Map() {
  return (
    <div className="relative">
      <MapContainer
        center={[35.708047, 51.448242]}
        zoom={13}
        style={{ height: "200px", width: "100%", borderRadius: "20px" }}
      >
        <TileLayer
          attribution="&copy;OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.702047, 51.448242]}>
          <Popup>
            Zitta is here
          </Popup>
        </Marker>
      </MapContainer>
      <div className="absolute top-2 left-11 bg-white shadow-lg border px-2 z-[1000] rounded-lg text-center text-sm flex items-center justify-center "><p className="text-gray-700"><a href="tel:09170613211" className="text-blue-800"><img src="./images/call.png" className="h-4 inline-block px-2"></img>09170613211</a></p></div>
      <div className="absolute top-8 left-11 bg-white shadow-lg border px-2 z-[1000] rounded-lg text-center text-sm flex items-center justify-center"><p className="text-gray-700"><a href="mailto:zmalekmakanph@gmail.com" className="text-blue-800"><img src="./images/mail.png" className="h-5 inline-block px-2"></img>zmalekmakanph@gmail.com</a></p></div>
      <div className="absolute bottom-5 left-5 z-[1000] bg-white rounded-lg border px-1 text-center flex items-center justify-center text-sm"><a href="https://github.com/z-malekmakan" className="text-blue-800"><img src="./images/github.png" className="h-5 inline-block px-2"/>https://github.com/z-malekmakan</a></div>
    </div>
  );
}

export default Map;
