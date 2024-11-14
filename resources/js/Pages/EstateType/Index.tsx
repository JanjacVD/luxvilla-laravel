import BasicTable from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useEstateTypeColumns from "./hooks/ColumnDefinitions";
import { Link } from "@inertiajs/react";

const Index = ({ types }: PageProps<{ types: TEstateType[] }>) => {
    const { columns } = useEstateTypeColumns();
    const table = useReactTable({
        data: types.sort((a, b) =>
            ("" + b.deleted_at).localeCompare(a.deleted_at + "")
        ),
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <AuthenticatedLayout header="Tipovi nekretnine">
            <div className="p-8">
                <div className="py-4">
                    <Link
                        className="bg-stone-800 text-white px-4 py-2 rounded-md"
                        href={route("estate-type.create")}
                    >
                        Create
                    </Link>
                </div>
                <BasicTable tableDef={table} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
