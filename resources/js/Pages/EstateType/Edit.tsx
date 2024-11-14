import PrimaryButton from "@/Components/PrimaryButton";
import TranslatableInput from "@/Components/TranslatableInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";

const Edit = ({ type }: PageProps<{ type: TEstateType }>) => {
    const { data, setData, put } = useForm({
        name: {
            ...type.name,
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("estate-type.update", { estate_type: type }));
    };

    return (
        <AuthenticatedLayout header="Uredi Tip">
            <div className="p-8">
                <form onSubmit={handleSubmit}>
                    <TranslatableInput
                        label="Naziv"
                        setData={setData}
                        value={data}
                    />
                    <PrimaryButton className="mt-4 ml-auto" type="submit">
                        Spremi
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
