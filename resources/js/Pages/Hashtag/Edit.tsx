import PrimaryButton from "@/Components/PrimaryButton";
import TranslatableInput from "@/Components/TranslatableInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useForm } from "@inertiajs/react";

const Create = ({ hashtag }: PageProps<{ hashtag: THashtag }>) => {
    const { data, setData, put, reset } = useForm({
        name: {
            ...hashtag.name,
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("hashtag.update", { hashtag: hashtag }), {
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
