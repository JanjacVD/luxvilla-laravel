import { Table as TTableType, flexRender } from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

type TProps<T extends Object> = {
    tableDef: TTableType<T>;
    renderSubtable?: (original: T) => React.ReactNode;
};

const BasicTable = <T extends object>({
    tableDef,
    renderSubtable,
}: TProps<T>) => {
    return (
        <Table>
            <TableHeader className={cn("z-[1] border-spacing-x-12 bg-white")}>
                {tableDef.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                        key={headerGroup.id}
                        className={cn("border-collapse border-0 border-solid")}
                    >
                        {headerGroup.headers.map((header) => (
                            <TableHead
                                colSpan={header.colSpan}
                                key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                                style={{ width: header.column.getSize() }}
                                className={cn(
                                    "h-8 border-collapse border-0 border-solid text-sm"
                                )}
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody className="bg-slate-50">
                {tableDef.getRowModel().rows?.length === 0 ? (
                    <TableRow>
                        <TableCell
                            colSpan={tableDef.getAllColumns().length}
                            className="h-12 text-center"
                        >
                            No Data
                        </TableCell>
                    </TableRow>
                ) : (
                    tableDef.getRowModel().rows.map((row) => (
                        <Fragment key={row.id}>
                            <TableRow
                                key={row.id}
                                className={cn(
                                    "border-collapse border border-solid"
                                )}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        style={{ width: cell.column.getSize() }}
                                        className={cn(
                                            "border-collapse flex-1 border-0 border-solid text-lg text-black"
                                        )}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                            {renderSubtable && (
                                <TableRow className="w-full">
                                    <TableCell
                                        colSpan={
                                            tableDef.getAllColumns().length
                                        }
                                        className="w-full border-t-2 border-t-gray-200 px-12"
                                    >
                                        <div className="w-full">
                                            {renderSubtable(row.original)}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </Fragment>
                    ))
                )}
            </TableBody>
        </Table>
    );
};

export default BasicTable;
