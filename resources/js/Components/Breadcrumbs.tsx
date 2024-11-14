import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

const Breadcrumbs = ({ items }: { items: TBreadcrumb[] }) => {
    if (items.length < 2) return null;
    return (
        <ol
            role="navigation"
            className="flex items-center mt-4 capitalize font-semibold flex-wrap"
        >
            {items.map(({ url, label }, i) => (
                <li
                    className={cn(
                        "flex items-center text-xs sm:text-xl",
                        !(i === items.length - 1) && "text-gray-500"
                    )}
                    key={url}
                >
                    <Link href={url}>{label}</Link>
                    {!(i === items.length - 1) && (
                        <span className="mx-4">{">"}</span>
                    )}
                </li>
            ))}
        </ol>
    );
};

export default Breadcrumbs;
