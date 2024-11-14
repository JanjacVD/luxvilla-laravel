import BasicTable from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import {
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Link } from "@inertiajs/react";
import useHashtagGroupColumns from "./hooks/ColumnDefinitions";
import { useState } from "react";
import HashtagTable from "./components/HashtagTable";

const Index = ({ groups }: PageProps<{ groups: THashtagGroup[] }>) => {
    const [expandedRowId, setExpandedRowId] = useState<number>();
    const setExpanded = (val: number) => {
        setExpandedRowId((prev) => (prev === val ? undefined : val));
    };
    const { columns } = useHashtagGroupColumns({
        setExpandedRowId: setExpanded,
    });
    const table = useReactTable({
        data: groups.sort((a, b) =>
            ("" + b.deleted_at).localeCompare(a.deleted_at + "")
        ),
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        getRowCanExpand: () => true,
        getExpandedRowModel: getExpandedRowModel(),
    });

    const renderSubtable = (group: THashtagGroup) => {
        if (group.id === expandedRowId) {
            return <HashtagTable hashtags={group.hashtags} />;
        }
    };

    return (
        <AuthenticatedLayout header="Hashtagovi">
            <div className="p-8">
                <div className="py-4">
                    <Link
                        className="bg-stone-800 text-white px-4 py-2 rounded-md"
                        href={route("hashtag-group.create")}
                    >
                        Create
                    </Link>
                </div>
                <BasicTable tableDef={table} renderSubtable={renderSubtable} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
