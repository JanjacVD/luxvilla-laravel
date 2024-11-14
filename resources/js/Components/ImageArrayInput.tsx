import { ChangeEvent } from "react";
import TranslatableInput from "./TranslatableInput";
import { Button } from "./ui/button";
import TextInput from "./TextInput";

const ImageArrayInput = ({
    images,
    setImages,
}: {
    images: TImage[];
    setImages: (images: TImage[]) => void;
}) => {
    // Handle file input change
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            id: URL.createObjectURL(file),
            file,
            name: { en: "", hr: "" },
        }));
        setImages([...images, ...newImages]);
    };

    // Handle image removal
    const handleRemoveImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleAltChange = (index: number, name: TTranslatable) => {
        setImages(
            images.map((image, i) => (i === index ? { ...image, name } : image))
        );
    };
    return (
        <div>
            <p>Slike</p>
            <TextInput
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
            />
            <div>
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className="flex flex-row items-end gap-x-6 my-4"
                    >
                        <img
                            src={image.id}
                            alt={image.name.hr}
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                            }}
                        />
                        <div className="w-36">
                            <TranslatableInput
                                label="Alt Text"
                                value={image}
                                setData={(_, val) =>
                                    handleAltChange(index, val as TTranslatable)
                                }
                            />
                        </div>
                        <Button onClick={() => handleRemoveImage(index)}>
                            Ukloni
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageArrayInput;
