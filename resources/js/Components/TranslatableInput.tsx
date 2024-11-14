import { Label } from "@headlessui/react";
import Collapsible from "./Collapsible";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";

const TranslatableInput = <T extends { name: TTranslatable }>({
    label,
    value,
    setData,
}: {
    label: string;
    value: T;
    setData: (key: keyof T, val: T[keyof T]) => void;
}) => {
    return (
        <div>
            <Collapsible title={label}>
                <div className="px-4 py-1">
                    <InputLabel>HR</InputLabel>
                    <TextInput
                        required
                        className="w-full"
                        value={value.name.hr}
                        onChange={(e) =>
                            setData("name", {
                                ...value.name,
                                hr: e.target.value,
                            } as T[keyof T])
                        }
                    />
                </div>
                <div className="px-4 py-1">
                    <InputLabel>EN</InputLabel>
                    <TextInput
                        required
                        className="w-full"
                        value={value.name.en}
                        onChange={(e) =>
                            setData("name", {
                                ...value.name,
                                en: e.target.value,
                            } as T[keyof T])
                        }
                    />
                </div>
            </Collapsible>
        </div>
    );
};

export default TranslatableInput;
