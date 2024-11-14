import { usePage } from "@inertiajs/react";
import EstateCard from "./EstateCard";
import { PageProps } from "@/types";

const FilteredEstateList = () => {
    const { estates } = usePage<
        PageProps<{
            estates: TEstate[];
        }>
    >().props;
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  w-full">
            {estates.map((estate, i) => (
                <EstateCard
                    estate={estate}
                    key={i}
                    className="min-h-96 !w-full"
                />
            ))}
        </div>
    );
};

export default FilteredEstateList;
