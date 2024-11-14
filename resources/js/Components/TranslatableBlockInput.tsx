import Collapsible from "./Collapsible";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import Checkbox from "./Checkbox";
const TranslatableBlockInput = <T extends { description: TTranslatable }>({
    label,
    value,
    setData,
}: {
    label: string;
    value: T;
    setData: (key: keyof T, val: T[keyof T]) => void;
}) => {
    const [togglePreviewHr, setTogglePreviewHr] = useState(false);
    const [togglePreviewEn, setTogglePreviewEn] = useState(false);
    return (
        <div>
            <Collapsible title={label}>
                <div className="px-4 py-1">
                    <InputLabel>HR</InputLabel>
                    <label>
                        Pretpregled
                        <Checkbox
                            className="ml-2"
                            checked={togglePreviewHr}
                            onChange={() => setTogglePreviewHr((prev) => !prev)}
                        />
                    </label>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <ReactQuill
                            value={value.description.hr}
                            onChange={(e) =>
                                setData("description", {
                                    ...value.description,
                                    hr: e,
                                } as T[keyof T])
                            }
                            modules={{
                                toolbar: [
                                    [
                                        {
                                            size: [
                                                "small",
                                                false,
                                                "large",
                                                "huge",
                                            ],
                                        },
                                    ], // Font size options
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["bold", "italic", "underline", "strike"],
                                    ["blockquote", "code-block"],
                                    ["link", "image"],
                                    [
                                        {
                                            color: [
                                                null,
                                                "#e60000",
                                                "#ff9900",
                                                "#ffff00",
                                                "#008a00",
                                                "#0066cc",
                                                "#9933ff",
                                            ],
                                        },
                                        {
                                            background: [
                                                null,
                                                "#e60000",
                                                "#ff9900",
                                                "#ffff00",
                                                "#008a00",
                                                "#0066cc",
                                                "#9933ff",
                                            ],
                                        },
                                    ],
                                    [{ align: [] }],
                                ],
                            }}
                            placeholder="..."
                        />

                        {/* Markdown Preview */}
                        {togglePreviewHr && (
                            <div
                                style={{
                                    padding: "1rem",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    backgroundColor: "#f9f9f9",
                                }}
                            >
                                <h3>Pretpregled:</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: value.description.hr,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="px-4 py-1">
                    <InputLabel>EN</InputLabel>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <label>
                            Pretpregled
                            <Checkbox
                                className="ml-2"
                                checked={togglePreviewEn}
                                onChange={() =>
                                    setTogglePreviewEn((prev) => !prev)
                                }
                            />
                        </label>
                        <ReactQuill
                            value={value.description.en}
                            onChange={(e) =>
                                setData("description", {
                                    ...value.description,
                                    en: e,
                                } as T[keyof T])
                            }
                            modules={{
                                toolbar: [
                                    [
                                        {
                                            size: [
                                                "small",
                                                false,
                                                "large",
                                                "huge",
                                            ],
                                        },
                                    ], // Font size options
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["bold", "italic", "underline", "strike"],
                                    ["blockquote", "code-block"],
                                    ["link", "image"],
                                    [
                                        {
                                            color: [
                                                null,
                                                "#e60000",
                                                "#ff9900",
                                                "#ffff00",
                                                "#008a00",
                                                "#0066cc",
                                                "#9933ff",
                                            ],
                                        },
                                        {
                                            background: [
                                                null,
                                                "#e60000",
                                                "#ff9900",
                                                "#ffff00",
                                                "#008a00",
                                                "#0066cc",
                                                "#9933ff",
                                            ],
                                        },
                                    ],
                                    [{ align: [] }],
                                ],
                            }}
                            placeholder="..."
                        />

                        {/* Markdown Preview */}
                        {togglePreviewEn && (
                            <div
                                style={{
                                    padding: "1rem",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                    backgroundColor: "#f9f9f9",
                                }}
                            >
                                <h3>Pretpregled:</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: value.description.en,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Collapsible>
        </div>
    );
};

export default TranslatableBlockInput;
