import BasicTable from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";

const Show = ({
    estate,
    images,
    videos,
}: PageProps<{
    estate: TRealEstate;
    images: TSavedImage[];
    videos: TSavedVideo[];
}>) => {
    return (
        <AuthenticatedLayout header="Nekretnine">
            <div className="p-8">
                <div className="py-4">
                    <Link
                        className="bg-stone-800 text-white px-4 py-2 rounded-md"
                        href={route("real-estate.edit", {
                            real_estate: estate,
                        })}
                    >
                        Uredi
                    </Link>
                    <div className="p-8">
                        <p>ID: {estate.estate_id}</p>
                        <p>Naziv: {estate.name.hr}</p>
                        <p>Naziv(EN): {estate.name.en}</p>
                        <p>Naselje: {estate.area.name}</p>
                        <p>Površina: {estate.area_size}</p>
                        <p>{/* {estate.estateType.name.hr} */}</p>
                        <p>Istaknuto: {estate.featured ? "Da" : "Ne"}</p>
                        <p>Vlasnik: {estate.owner_name}</p>
                        <p>Kontakt: {estate.owner_contact}</p>
                        <p>
                            Parking:{" "}
                            {estate.parking_available
                                ? estate.parking_spaces
                                : "Ne"}
                        </p>
                        <p>Cijena: {estate.price} €</p>
                        <p>Broj soba: {estate.rooms}</p>
                        {estate.year_built && (
                            <p>Godina izgradnje: {estate.year_built}</p>
                        )}
                        {estate.year_renovated && (
                            <p>Godina Renovacije {estate.year_renovated}</p>
                        )}
                        <p className="mt-4">Opis:</p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: String(estate.description?.hr),
                            }}
                        ></div>
                        <p className="mt-8">Opis(EN):</p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: String(estate.description?.en),
                            }}
                        ></div>
                        <div className="mt-12">
                            Slike
                            <div className="w-full grid grid-cols-4 gap-x-4">
                                {images.map((img) => (
                                    <img
                                        loading="lazy"
                                        key={img.id}
                                        src={img.original_url}
                                        alt={img.alt_text.hr}
                                        className="max-h-80"
                                    />
                                ))}
                            </div>
                        </div>
                        {videos?.[0] && (
                            <div className="mt-12">
                                Video
                                <video
                                    src={videos?.[0].original_url}
                                    controls
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
