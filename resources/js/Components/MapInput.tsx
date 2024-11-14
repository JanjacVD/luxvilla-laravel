import { useEffect, useMemo, useState } from "react";
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "./ui/button";
import SecondaryButton from "./SecondaryButton";
import { cn } from "@/lib/utils";

const MapInput = ({
    county,
    area,
    address,
    radius,
    value,
    setData,
}: {
    county?: TCounty;
    area?: TArea;
    address: string;
    radius: number;
    value?: [number, number];
    setData(val?: [number, number]): void;
}) => {
    const [geopoints, setGeopoints] = useState<[number, number] | undefined>(
        value
    );

    const key = useMemo(() => {
        return JSON.stringify(geopoints) + radius + JSON.stringify(area);
    }, [geopoints, radius]);

    useEffect(() => {
        const fetchLocation = async () => {
            if (county && area && address) {
                fetch(
                    `https://nominatim.openstreetmap.org/search?country=Croatia&city=${area.name}&county=${county?.name.hr}&address=${address}&format=json&addressdetails=1&limit=1`,
                    {
                        headers: {
                            Accept: "application/json",
                            "User-Agent": "valentino.janjac@gmail.com",
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((res) => {
                        if (res[0]) {
                            setGeopoints([
                                Number(res[0].lat),
                                Number(res[0].lon),
                            ]);
                        }
                    });
            }
        };
        fetchLocation();
    }, [county, area, address]);

    return (
        geopoints &&
        area &&
        address && (
            <div
                style={{
                    width: "100%",

                    height: 400,
                }}
            >
                <>
                    <MapContainer
                        style={{ width: "100%", height: "90%" }}
                        center={geopoints}
                        zoom={13}
                        key={key}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={geopoints}>
                            <Popup>Približna Lokacija Nekretnine</Popup>
                        </Marker>
                        <Circle center={geopoints} radius={radius} />
                    </MapContainer>
                    <SecondaryButton
                        className={cn("my-4 ml-auto", value && "!bg-green-500")}
                        onClick={() => setData(geopoints)}
                    >
                        Potvrdi Koordinate
                    </SecondaryButton>
                </>
            </div>
        )
    );
};

export default MapInput;
