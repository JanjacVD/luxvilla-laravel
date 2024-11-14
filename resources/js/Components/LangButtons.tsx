import { Link, usePage } from "@inertiajs/react";

const LangButtons = () => {
    const page = usePage();
    const { locale } = page.props;
    const getPath = (locale: string) => {
        const url = page.url;
        const segments = url.split("/");
        segments[1] = locale;
        const path = segments.join("/");
        return path;
    };

    return (
        <ul className="flex items-center gap-x-8 uppercase">
            {["en", "hr"].map((lang) => (
                <li key={lang}>
                    <Link
                        className={
                            locale === lang
                                ? "underline underline-offset-4"
                                : ""
                        }
                        href={getPath(lang)}
                    >
                        {lang}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default LangButtons;
