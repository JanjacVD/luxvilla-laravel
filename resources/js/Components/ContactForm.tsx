import { toast } from "react-toastify";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { router } from "@inertiajs/react";

const ContactForm = ({ estate }: { estate: TEstate }) => {
    const { t } = useTranslation();
    const ref = useRef<HTMLFormElement>(null);
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        router.post(route("contact.store"), data, {
            onSuccess: () => {
                ref?.current?.reset();
                toast.success(t("contact.emailSent"));
            },
            onError: (e) => {
                toast.error(t("contact.sendError"));
            },
        });
    };
    return (
        <form
            className="border rounded-md px-8 py-4 bg-white h-auto"
            ref={ref}
            onSubmit={handleSubmit}
        >
            <p className="text-xl text-center pb-2">{t("contact.title")}</p>
            <Label htmlFor="name">
                {t("contact.name")}
                <Input
                    id="name"
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                />
            </Label>
            <Label htmlFor="email">
                {t("contact.email")}
                <Input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                />
            </Label>
            <Label htmlFor="phone">
                {t("contact.phone")}
                <Input
                    id="phone"
                    name="phone"
                    required
                    type="phone"
                    autoComplete="tel"
                />
            </Label>
            <Input type="hidden" name="estate_id" value={estate.estateId} />
            <Label htmlFor="msg">
                {t("contact.msg")}
                <textarea
                    id="msg"
                    name="msg"
                    required
                    className="resize-y border text-sm border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground !theme flex w-full rounded-md  px-3 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
            </Label>
            <Button className="mt-2" type="submit">
                {t("contact.submit")}
            </Button>
        </form>
    );
};

export default ContactForm;
