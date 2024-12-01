"use client";

import { Circle, MapContainer, TileLayer } from "react-leaflet";

const MapWrapper = ({ estate }: { estate: TEstate }) => {
    if (!estate?.coordinates || !(estate.coordinates?.length === 2)) {
        return null;
    }
    return (
        <div className="w-full h-96 z-0 mt-8">
            <MapContainer
                style={{ width: "100%", height: "90%", zIndex: 0 }}
                center={estate.coordinates}
                zoom={13}
                key={JSON.stringify(estate.coordinates)}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Circle
                    center={estate.coordinates}
                    radius={estate.radius ?? 500}
                />
            </MapContainer>
        </div>
    );
};

export default MapWrapper;
