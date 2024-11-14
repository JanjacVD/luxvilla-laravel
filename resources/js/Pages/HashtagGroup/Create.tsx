import PrimaryButton from "@/Components/PrimaryButton";
import TranslatableInput from "@/Components/TranslatableInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, reset } = useForm({
        name: {
            hr: "",
            en: "",
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("hashtag-group.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout header="Kreiraj Groupu">
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
