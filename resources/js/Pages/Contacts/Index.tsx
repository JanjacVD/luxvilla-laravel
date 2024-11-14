import BasicTable from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useContactColumns from "./hooks/ColumnDefinitions";
import { PageProps } from "@/types";
import { useState } from "react";
import Modal from "@/Components/Modal";

const ContactIndex = ({
    contacts,
}: PageProps<{ contacts: TContactForm[] }>) => {
    const [detailedMsg, setDetailedMsg] = useState<TContactForm | undefined>();
    const { columns } = useContactColumns({ setModal: setDetailedMsg });
    const table = useReactTable({
        data: contacts,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
        <AuthenticatedLayout header="Tipovi nekretnine">
            <div className="p-8">
                <BasicTable tableDef={table} />
            </div>
            <Modal
                onClose={() => setDetailedMsg(undefined)}
                show={!!detailedMsg}
                closeable
                maxWidth="2xl"
            >
                <div className="p-8">
                    <p>ID: {detailedMsg?.estate_id}</p>
                    <p>Ime: {detailedMsg?.name}</p>
                    <p>Email: {detailedMsg?.email}</p>
                    <p>Mobitel: {detailedMsg?.phone}</p>
                    <p>Poruka: {detailedMsg?.msg}</p>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default ContactIndex;
