import PrimaryButton from "@/Components/PrimaryButton";
import TranslatableInput from "@/Components/TranslatableInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";

const Create = ({ group }: PageProps<{ group: number }>) => {
    const { data, setData, post, reset } = useForm({
        name: {
            hr: "",
            en: "",
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("hashtag.store", { group: group }), {
            onSuccess: () => reset(),
        });
    };
    return (
        <AuthenticatedLayout header="Kreiraj Hashtag">
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

export default Create;
