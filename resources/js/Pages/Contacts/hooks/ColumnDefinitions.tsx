import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";

const useContactColumns = ({
    setModal,
}: {
    setModal(contact: TContactForm): void;
}) => {
    const markAsRead = (contact: TContactForm) => {
        router.patch(route("contacts.update", { contact }), {
            read: true,
        });
    };

    const markAsUnread = (contact: TContactForm) => {
        router.patch(route("contacts.update", { contact }), {
            read: false,
        });
    };
    const seeDetails = (contact: TContactForm) => {
        setModal(contact);
    };

    const columnHelper = createColumnHelper<TContactForm>();
    const columns = [
        columnHelper.accessor("estate_id", { header: "ID Nekretnine" }),
        columnHelper.accessor("name", { header: "Ime" }),
        columnHelper.accessor("email", { header: "Email" }),
        columnHelper.accessor("phone", { header: "Mobitel" }),
        columnHelper.accessor("read", {
            header: "Pročitano",
            cell: ({ row: { original } }) => {
                return original.read ? "Da" : "Ne";
            },
        }),

        columnHelper.accessor("id", {
            header: "Akcije",
            cell: ({ row: { original } }) => {
                return original.read ? (
                    <div className="flex items-center gap-x-2">
                        <PrimaryButton onClick={() => markAsUnread(original)}>
                            Vrati u nepročitano
                        </PrimaryButton>
                    </div>
                ) : (
                    <div className="flex items-center gap-x-2">
                        <PrimaryButton onClick={() => markAsRead(original)}>
                            Označi kao pročitano
                        </PrimaryButton>
                        <PrimaryButton onClick={() => seeDetails(original)}>
                            Pogledaj detalje
                        </PrimaryButton>
                    </div>
                );
            },
        }),
    ];

    return { columns };
};

export default useContactColumns;
