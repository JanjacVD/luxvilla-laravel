"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command";

type TProps = {
    value?: string;
    setValue(val: string): void;
    options: {
        label: string;
        value: string;
    }[];
    placeholder: string;
    disabled?: boolean;
    renderLabel?: (value?: {
        value: string;
        label: string;
    }) => string | undefined;
};
const Combobox = ({
    value,
    options,
    placeholder,
    disabled = false,
    renderLabel,
    setValue,
}: TProps) => {
    const [open, setOpen] = React.useState(false);
    const { t } = useTranslation();
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                asChild
                className="bg-white text-black"
                aria-label={`${t("common.select")} ${placeholder}`}
            >
                <Button
                    disabled={disabled}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between !theme"
                >
                    {value
                        ? renderLabel
                            ? renderLabel(
                                  options?.find(
                                      (option) => option.value === value
                                  )
                              ) ?? placeholder
                            : options.find((option) => option.value === value)
                                  ?.label ?? placeholder
                        : placeholder}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 theme">
                <Command>
                    <CommandInput placeholder={placeholder} className="h-9" />
                    <CommandList>
                        <CommandEmpty>
                            {t("estateFilter.noOptions")}
                        </CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    className="theme"
                                    key={option.value}
                                    value={option.label}
                                    onSelect={() => {
                                        setValue(
                                            option.value === value
                                                ? ""
                                                : option.value
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {renderLabel
                                        ? renderLabel(option)
                                        : option.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === option.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default Combobox;
