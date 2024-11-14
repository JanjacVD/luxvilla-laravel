"use client";

import { Circle, MapContainer, TileLayer } from "react-leaflet";

const MapWrapper = ({ estate }: { estate: TEstate }) => {
    return (
        <div className="w-full h-96 z-0 mt-8">
            <MapContainer
                style={{ width: "100%", height: "100%", zIndex: -10 }}
                center={estate.coordinates}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={estate.coordinates} radius={estate.radius} />
            </MapContainer>
        </div>
    );
};

export default MapWrapper;
