import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";

const useRealEstateColumns = () => {
    const handleDelete = (estate: TRealEstate) => {
        router.delete(route("real-estate.destroy", { real_estate: estate }));
    };

    const handleRestore = (estate: TRealEstate) => {
        router.post(route("real-estate.restore", { real_estate: estate }));
    };

    const columnHelper = createColumnHelper<TRealEstate>();
    const columns = [
        columnHelper.accessor("estate_id", {
            header: "ID",
        }),
        columnHelper.accessor("name.hr", { header: "Naziv Hrvatski" }),
        columnHelper.accessor((row) => row.name.en, {
            header: "Naziv Engleski",
            cell: ({
                row: {
                    original: { name },
                },
            }) => name.en,
        }),
        columnHelper.accessor("id", {
            header: "Akcije",
            cell: ({ row: { original } }) => {
                return original.deleted_at ? (
                    <div className="flex items-center gap-x-2">
                        <PrimaryButton onClick={() => handleRestore(original)}>
                            Obnovi
                        </PrimaryButton>
                        <PrimaryButton onClick={() => handleDelete(original)}>
                            Izbriši trajno
                        </PrimaryButton>
                    </div>
                ) : (
                    <div className="flex items-center gap-x-2">
                        <PrimaryButton>
                            <Link
                                href={route("real-estate.edit", {
                                    id: original.id,
                                })}
                            >
                                Uredi
                            </Link>
                        </PrimaryButton>
                        <DangerButton onClick={() => handleDelete(original)}>
                            Obriši
                        </DangerButton>
                    </div>
                );
            },
        }),
    ];

    return { columns };
};

export default useRealEstateColumns;
