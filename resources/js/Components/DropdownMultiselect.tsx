import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type TProps = {
    options: TFeatureGroup[];
    values: string[];
    handleValueClick(val: string): void;
    handleClear(): void;
};
const DropdownMultiselect = ({
    values,
    options,
    handleValueClick,
    handleClear,
}: TProps) => {
    const [open, setOpen] = useState(false);
    return (
        <DropdownMenu open={open}>
            <DropdownMenuTrigger
                asChild
                className="w-full"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen((prev) => !prev);
                }}
            >
                <Button
                    variant="outline"
                    className="w-full block text-black whitespace-normal text-ellipsis overflow-hidden"
                >
                    {options
                        .flatMap((group) => group.hashtags)
                        .filter((val) => values.includes(String(val.id)))
                        .map((val) => val.name)
                        .toLocaleString()}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-auto min-w-96 max-h-96 grid grid-rows-8 "
                onEscapeKeyDown={() => setOpen(false)}
                onInteractOutside={() => setOpen(false)}
            >
                <div className="w-full row-span-7 overflow-y-auto overflow-hidden">
                    {options.map((option) => (
                        <div key={option.id}>
                            <DropdownMenuLabel>{option.name}</DropdownMenuLabel>
                            {option.hashtags.map((feature) => (
                                <DropdownMenuCheckboxItem
                                    key={feature.id}
                                    checked={values.includes(
                                        String(feature.id)
                                    )}
                                    onCheckedChange={() =>
                                        handleValueClick(String(feature.id))
                                    }
                                >
                                    {feature.name}
                                </DropdownMenuCheckboxItem>
                            ))}
                            <DropdownMenuSeparator />
                        </div>
                    ))}
                </div>
                <div className="row-span-1 w-full h-full flex items-end border-t">
                    <Button onClick={handleClear}>Clear all</Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DropdownMultiselect;
