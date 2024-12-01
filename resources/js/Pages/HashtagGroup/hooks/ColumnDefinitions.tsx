import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";

const useHashtagGroupColumns = ({
    setExpandedRowId,
}: {
    setExpandedRowId: (val: number) => void;
}) => {
    const handleDelete = (type: THashtagGroup) => {
        router.delete(route("hashtag-group.destroy", { hashtag_group: type }));
    };

    const handleRestore = (type: THashtagGroup) => {
        router.post(route("hashtag-group.restore", { hashtag_group: type }));
    };

    const columnHelper = createColumnHelper<THashtagGroup>();
    const columns = [
        columnHelper.accessor((row) => row.name.en, {
            header: "Naziv Hrvatski",
            cell: ({
                row: {
                    original: { name, id },
                },
            }) => (
                <div
                    className="cursor-pointer"
                    onClick={() => setExpandedRowId(id)}
                >
                    {name.hr}
                </div>
            ),
        }),
        columnHelper.accessor((row) => row.name.en, {
            header: "Naziv Engleski",
            cell: ({
                row: {
                    original: { name, id },
                },
            }) => (
                <div
                    className="cursor-pointer"
                    onClick={() => setExpandedRowId(id)}
                >
                    {name.en}
                </div>
            ),
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
                                href={route("hashtag-group.edit", {
                                    id: original.id,
                                })}
                            >
                                Uredi
                            </Link>
                        </PrimaryButton>
                        <PrimaryButton>
                            <Link
                                href={route("hashtag.create", {
                                    id: original.id,
                                })}
                            >
                                Dodaj hashtag
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

export default useHashtagGroupColumns;
