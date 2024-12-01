import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";

const useEstateTypeColumns = () => {
    const handleDelete = (type: TEstateType) => {
        router.delete(route("estate-type.destroy", { estate_type: type }));
    };

    const handleRestore = (type: TEstateType) => {
        router.post(route("estate-type.restore", { estate_type: type }));
    };

    const columnHelper = createColumnHelper<TEstateType>();

    const columns = [
        columnHelper.accessor("name.hr", { header: "Naziv Hrvatski" }),
        columnHelper.accessor((row) => row.name.en, {
            header: "Naziv Engleski",
            cell: ({
                row: {
                    original: { name },
                },
            }) => name.en,
        }),
        columnHelper.accessor("slug", {
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
                                href={route("estate-type.edit", {
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

export default useEstateTypeColumns;
