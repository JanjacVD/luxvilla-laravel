import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";

const useHashtagColumnDefinitions = () => {
    const handleDelete = (type: THashtag) => {
        router.delete(route("hashtag.destroy", { hashtag: type }));
    };

    const handleRestore = (type: THashtag) => {
        router.post(route("hashtag.restore", { hashtag: type }));
    };

    const columnHelper = createColumnHelper<THashtag>();
    const columns = [
        columnHelper.accessor((row) => row.name.en, {
            header: "Naziv Hrvatski",
            cell: ({
                row: {
                    original: { name, id },
                },
            }) => name.hr,
        }),
        columnHelper.accessor((row) => row.name.en, {
            header: "Naziv Engleski",
            cell: ({
                row: {
                    original: { name, id },
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
                                href={route("hashtag.edit", {
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

export default useHashtagColumnDefinitions;
