import PrimaryButton from "@/Components/PrimaryButton";
import TranslatableInput from "@/Components/TranslatableInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";

const Edit = ({ group }: PageProps<{ group: THashtagGroup }>) => {
    const { data, setData, put } = useForm({
        name: {
            ...group.name,
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("hashtag-group.update", { hashtag_group: group }));
    };

    return (
        <AuthenticatedLayout header="Uredi Grupu">
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
