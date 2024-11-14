import {
    CollapsibleContent,
    Collapsible as CollapsibleUI,
    CollapsibleTrigger,
} from "./ui/collapsible";

const Collapsible = ({
    title,
    children,
}: React.PropsWithChildren<{ title: string }>) => {
    return (
        <CollapsibleUI defaultOpen={true}>
            <CollapsibleTrigger className="border bg-stone-300 rounded-md py-2 px-4 w-full">
                {title}
            </CollapsibleTrigger>
            <CollapsibleContent>{children}</CollapsibleContent>
        </CollapsibleUI>
    );
};

export default Collapsible;
