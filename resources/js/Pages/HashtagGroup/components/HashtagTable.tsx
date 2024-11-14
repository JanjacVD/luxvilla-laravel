import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useHashtagColumnDefinitions from "../hooks/SubtableColumnDefinitions";
import BasicTable from "@/Components/Table";

const HashtagTable = ({ hashtags }: { hashtags: THashtag[] }) => {
    const { columns } = useHashtagColumnDefinitions();
    const table = useReactTable({
        data: hashtags.sort((a, b) =>
            ("" + b.deleted_at).localeCompare(a.deleted_at + "")
        ),
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return <BasicTable tableDef={table} />;
};

export default HashtagTable;
