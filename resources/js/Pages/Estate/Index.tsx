import BasicTable from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useRealEstateColumns from "./hooks/ColumnDefinitions";
import { Link } from "@inertiajs/react";

const Index = ({ estates }: PageProps<{ estates: TRealEstate[] }>) => {
    const { columns } = useRealEstateColumns();
    const table = useReactTable({
        data: estates.sort((a, b) =>
            ("" + b.deleted_at).localeCompare(a.deleted_at + "")
        ),
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <AuthenticatedLayout header="Nekretnine">
            <div className="p-8">
                <div className="py-4">
                    <Link
                        className="bg-stone-800 text-white px-4 py-2 rounded-md"
                        href={route("real-estate.create")}
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
