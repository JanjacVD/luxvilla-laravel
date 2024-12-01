import Checkbox from "@/Components/Checkbox";
import ImageArrayInput from "@/Components/ImageArrayInput";
import InputLabel from "@/Components/InputLabel";
import MapInput from "@/Components/MapInput";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TranslatableBlockInput from "@/Components/TranslatableBlockInput";
import TranslatableInput from "@/Components/TranslatableInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const Create = ({
    counties,
    types,
    hashtagGroups,
}: PageProps<{
    counties: TCounty[];
    types: TEstateType[];
    hashtagGroups: THashtagGroup[];
}>) => {
    const { data, setData, post, reset } = useForm<{
        name: TTranslatable;
        description: TTranslatable;
        featured: boolean;
        estate_type_id?: number;
        price: number;
        area: number;
        year_built?: string;
        year_renovated?: string;
        parking_available: boolean;
        parking_spaces?: number;
        rooms?: number;
        area_id?: number;
        owner_name?: string;
        owner_contact?: string;
        address: string;
        radius: number;
        coordinates?: [number, number];
        hashtags: number[];
        images: TImage[];
        video?: File;
    }>({
        name: { hr: "", en: "" },
        description: {
            hr: "",
            en: "",
        },
        featured: false,
        estate_type_id: undefined,
        price: 0,
        area: 0,
        year_built: undefined,
        year_renovated: undefined,
        parking_available: false,
        parking_spaces: undefined,
        rooms: undefined,
        area_id: undefined,
        owner_name: "",
        owner_contact: "",
        address: "",
        radius: 100,
        coordinates: undefined,
        hashtags: [],
        images: [],
        video: undefined,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.estate_type_id) {
            alert("Potrebno je odabrati tip nekretnine");
            return;
        }
        if (!data.area_id) {
            alert("Potrebno je odabrati lokaciju");
            return;
        }
        if (!data.area_id) {
            return alert("Potrebno je unijeti lokaciju");
        }
        post(route("real-estate.store"), {
            onSuccess: () => reset(),
            forceFormData: true,
        });
    };
    const [selectedCounty, setSelectedCounty] = useState<TCounty>();
    const [selectedCity, setSelectedCity] = useState<TCity>();

    return (
        <AuthenticatedLayout header="Kreiraj Nekretninu">
            <div className="p-8">
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <TranslatableInput
                        label="Naziv"
                        setData={setData}
                        value={data}
                    />
                    <TranslatableBlockInput
                        value={data}
                        label="Opis"
                        setData={setData}
                    />
                    <div className="flex flex-row items-center gap-x-4">
                        <InputLabel htmlFor="featured" className="text-lg mt-4">
                            <Checkbox
                                className="mr-2"
                                id="featured"
                                name="featured"
                                checked={data.featured}
                                onChange={(e) =>
                                    setData("featured", e.target.checked)
                                }
                            />
                            Istaknuto?
                        </InputLabel>
                        <InputLabel
                            htmlFor="parkingAvailable"
                            className="text-lg mt-4"
                        >
                            <Checkbox
                                className="mr-2"
                                id="parkingAvailable"
                                name="parkingAvailable"
                                checked={data.parking_available}
                                onChange={(e) =>
                                    setData(
                                        "parking_available",
                                        e.target.checked
                                    )
                                }
                            />
                            Parking?
                        </InputLabel>
                        {data.parking_available && (
                            <InputLabel
                                htmlFor="parkingSpaces"
                                className="text-lg mt-4"
                            >
                                Broj mjesta?
                                <TextInput
                                    className="ml-2 w-16"
                                    id="parkingSpaces"
                                    required={data.parking_available}
                                    name="parkingSpaces"
                                    value={data.parking_spaces}
                                    onChange={(e) =>
                                        setData(
                                            "parking_spaces",
                                            isNaN(Number(e.target.value))
                                                ? 0
                                                : Number(e.target.value)
                                        )
                                    }
                                />
                            </InputLabel>
                        )}
                        <InputLabel htmlFor="rooms" className="text-lg mt-4">
                            Broj Soba?
                            <TextInput
                                className="ml-2 w-16"
                                id="rooms"
                                name="rooms"
                                value={data.rooms}
                                onChange={(e) =>
                                    setData(
                                        "rooms",
                                        isNaN(Number(e.target.value))
                                            ? 0
                                            : Number(e.target.value)
                                    )
                                }
                            />
                        </InputLabel>
                        <InputLabel htmlFor="area" className="text-lg mt-4">
                            Površina
                            <TextInput
                                className="ml-2 w-16"
                                id="area"
                                required
                                name="area"
                                value={data.area}
                                onChange={(e) =>
                                    setData(
                                        "area",
                                        isNaN(Number(e.target.value))
                                            ? 0
                                            : Number(e.target.value)
                                    )
                                }
                            />
                        </InputLabel>
                        <InputLabel htmlFor="price" className="text-lg mt-4">
                            Cijena
                            <TextInput
                                required
                                className="ml-2 w-16"
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={(e) =>
                                    setData(
                                        "price",
                                        isNaN(Number(e.target.value))
                                            ? 0
                                            : Number(e.target.value)
                                    )
                                }
                            />
                        </InputLabel>
                        <InputLabel
                            htmlFor="yearBuilt"
                            className="text-lg mt-4"
                        >
                            Godina Izgradnje
                            <TextInput
                                className="ml-2 w-16"
                                id="yearBuilt"
                                type="text"
                                name="yearBuilt"
                                value={data.year_built}
                                onChange={(e) => {
                                    setData("year_built", e.target.value);
                                }}
                            />
                        </InputLabel>
                        <InputLabel
                            htmlFor="yearRenovated"
                            className="text-lg mt-4"
                        >
                            Godina Zadnje Renovacije
                            <TextInput
                                className="ml-2 w-16"
                                id="yearRenovated"
                                name="yearRenovated"
                                value={data.year_renovated}
                                onChange={(e) => {
                                    setData("year_renovated", e.target.value);
                                }}
                            />
                        </InputLabel>
                    </div>
                    <div className="flex flex-row items-center gap-x-4 my-4">
                        <InputLabel htmlFor="estateType" className="text-lg">
                            Tip Nekretnine
                            <select
                                id="estateType"
                                name="estateType"
                                className="rounded-md ml-4"
                                value={data?.estate_type_id}
                                required
                                onChange={(e) => {
                                    setData(
                                        "estate_type_id",
                                        Number(e.target.value)
                                    );
                                }}
                            >
                                <option hidden value={undefined}>
                                    Odaberi Tip
                                </option>
                                {types.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.name.hr}
                                    </option>
                                ))}
                            </select>
                        </InputLabel>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <div className="p-4">
                                Podaci o vlasniku
                                <div className="pl-4 pt-2">
                                    <InputLabel
                                        htmlFor="ownerName"
                                        className="text-lg"
                                    >
                                        Ime i Prezine
                                        <TextInput
                                            className="ml-2"
                                            id="ownerName"
                                            name="ownerName"
                                            required
                                            value={data.owner_name}
                                            onChange={(e) =>
                                                setData(
                                                    "owner_name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </InputLabel>
                                    <InputLabel
                                        htmlFor="ownerContact"
                                        className="text-lg mt-4"
                                    >
                                        Kontakt
                                        <TextInput
                                            className="ml-2 "
                                            id="ownerContact"
                                            required
                                            name="ownerContact"
                                            value={data.owner_contact}
                                            onChange={(e) =>
                                                setData(
                                                    "owner_contact",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </InputLabel>
                                </div>
                            </div>
                            <div className="p-4">
                                Lokacija
                                <div className="pl-4 pt-2 flex flex-col gap-y-4">
                                    <InputLabel
                                        htmlFor="county"
                                        className="text-lg"
                                    >
                                        Županija
                                        <select
                                            id="county"
                                            name="county"
                                            required
                                            className="rounded-md ml-4"
                                            value={selectedCounty?.id}
                                            onChange={(e) => {
                                                setSelectedCounty(
                                                    counties.find(
                                                        (c) =>
                                                            String(c.id) ===
                                                            e.target.value
                                                    )
                                                );
                                                setSelectedCity(undefined);
                                            }}
                                        >
                                            <option hidden value={undefined}>
                                                Odaberi Županiju
                                            </option>
                                            {counties.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name.hr}
                                                </option>
                                            ))}
                                        </select>
                                    </InputLabel>
                                    <InputLabel
                                        htmlFor="city"
                                        className="text-lg"
                                    >
                                        Grad
                                        {selectedCounty?.id}
                                        <select
                                            id="city"
                                            required
                                            disabled={!selectedCounty}
                                            name="city"
                                            value={selectedCity?.id}
                                            className="rounded-md ml-4"
                                            onChange={(e) => {
                                                setSelectedCity(
                                                    selectedCounty?.cities.find(
                                                        (c) =>
                                                            String(c.id) ===
                                                            e.target.value
                                                    )
                                                );
                                                setData("area_id", undefined);
                                            }}
                                        >
                                            <option hidden value={undefined}>
                                                Odaberi Grad
                                            </option>
                                            {selectedCounty?.cities.map((c) => (
                                                <option value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                    </InputLabel>
                                    <InputLabel
                                        htmlFor="area"
                                        className="text-lg"
                                    >
                                        Naselje
                                        <select
                                            id="area"
                                            name="area"
                                            className="rounded-md ml-4"
                                            required
                                            disabled={!selectedCity}
                                            onChange={(e) => {
                                                console.log(
                                                    e.currentTarget.value
                                                );
                                                setData(
                                                    "area_id",
                                                    Number(
                                                        e.currentTarget.value
                                                    )
                                                );
                                            }}
                                            value={data.area_id}
                                        >
                                            <option hidden value={undefined}>
                                                Odaberi Naselje
                                            </option>
                                            {selectedCity?.areas.map((c) => (
                                                <option value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                    </InputLabel>

                                    <InputLabel
                                        htmlFor="address"
                                        className="text-lg"
                                    >
                                        Adresa
                                        <TextInput
                                            className="ml-2"
                                            id="address"
                                            name="address"
                                            required
                                            value={data.address}
                                            onChange={(e) =>
                                                setData(
                                                    "address",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </InputLabel>

                                    <InputLabel
                                        htmlFor="radius"
                                        className="text-lg"
                                    >
                                        Radius
                                        <TextInput
                                            className="ml-2"
                                            id="radius"
                                            type="range"
                                            min={1}
                                            max={10000}
                                            name="radius"
                                            value={data.radius}
                                            onChange={(e) =>
                                                setData(
                                                    "radius",
                                                    Number(e.target.value)
                                                )
                                            }
                                        />
                                        <TextInput
                                            className="ml-2"
                                            id="radius"
                                            type="number"
                                            min={0}
                                            max={10000}
                                            name="radius"
                                            value={data.radius}
                                            onChange={(e) =>
                                                setData(
                                                    "radius",
                                                    Math.max(
                                                        0,
                                                        Math.min(
                                                            Number(
                                                                e.target.value
                                                            ),
                                                            10000
                                                        )
                                                    )
                                                )
                                            }
                                        />
                                    </InputLabel>
                                    <MapInput
                                        setData={(val) =>
                                            setData("coordinates", val)
                                        }
                                        value={data.coordinates}
                                        address={data.address}
                                        area={selectedCity?.areas.find(
                                            (a) => a.id === data.area_id
                                        )}
                                        county={selectedCounty}
                                        radius={data.radius}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="h-full">
                            <p className="py-2 text-left">Hashtags</p>
                            {hashtagGroups.map((group) => (
                                <div key={"Group_" + group.id}>
                                    {group.name.hr}
                                    <div className="px-4 grid grid-cols-4 mb-4">
                                        {group.hashtags.map((hashtag) => (
                                            <InputLabel
                                                key={`${group.id}_${hashtag.id}`}
                                                htmlFor={`${group.id}_${hashtag.id}`}
                                            >
                                                <Checkbox
                                                    className="mr-2"
                                                    id={`${group.id}_${hashtag.id}`}
                                                    name={`${group.id}_${hashtag.id}`}
                                                    defaultChecked={data.hashtags.includes(
                                                        hashtag.id
                                                    )}
                                                    onChange={(e) => {
                                                        const checked =
                                                            e.target.checked;
                                                        setData(
                                                            "hashtags",
                                                            !checked
                                                                ? data.hashtags.filter(
                                                                      (hash) =>
                                                                          hash !==
                                                                          hashtag.id
                                                                  )
                                                                : [
                                                                      ...data.hashtags,
                                                                      hashtag.id,
                                                                  ]
                                                        );
                                                    }}
                                                />
                                                {hashtag.name.hr}
                                            </InputLabel>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ImageArrayInput
                        images={data.images}
                        setImages={(imgs) => setData("images", imgs)}
                    />
                    <p className="mt-8">Video</p>
                    <TextInput
                        type="file"
                        accept="video/*"
                        onChange={(e) => {
                            setData("video", e?.target?.files?.[0]);
                        }}
                    />
                    <div className="w-full flex items-end justify-end">
                        <PrimaryButton className="mt-4 ml-auto" type="submit">
                            Spremi
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
