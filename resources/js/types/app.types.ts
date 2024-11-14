type TTranslatable = {
    en: string;
    hr: string;
};

type TEstateType = {
    id: number;
    name: TTranslatable;
    slug: string;
    deleted_at?: string;
};

type TEstateTypeTranslated = {
    id: number;
    name: string;
    slug: string;
    deleted_at?: string;
};

type THashtagGroup = {
    id: number;
    deleted_at?: string;
    name: TTranslatable;
    hashtags: THashtag[];
};

type THashtag = {
    id: number;
    name: TTranslatable;
    deleted_at?: string;
};

type TRealEstate = {
    name: TTranslatable;
    deleted_at?: string;
    estateType: TEstateType;
    id: number;
    createdAt: string; // Timestamp
    updatedAt: string; // Timestamp
    deletedAt?: string | null; // Soft delete timestamp
    estate_id: string;
    featured: boolean;
    area: TArea;
    price: number;
    address: string;
    area_id: number;
    area_size: number;
    year_built: number;
    year_renovated?: number | null;
    parking_available: boolean;
    parking_spaces?: number | null;
    rooms?: number | null;
    description?: TTranslatable; // JSON with potentially multilingual description
    owner_name: string;
    owner_contact: string;
    soldAt?: string | null; // Date of sale
    coordinates: [number, number]; // JSON with latitude and longitude
    radius: number;
    hashtags?: THashtag[];
};

type TCounty = {
    id: number;
    name: TTranslatable;
    slug: string;
    cities: TCity[];
};

type TCountyTranslated<T = TRealEstate> = {
    id: number;
    name: string;
    slug: string;
    cities: TCity<T>[];
};

type TCity<T = TRealEstate> = {
    id: number;
    name: string;
    slug: string;
    areas: TArea<T>[];
};

type TArea<T = TRealEstate> = {
    id: number;
    name: string;
    slug: string;
    estates?: T[];
};

type TImage = {
    id: string;
    file: File;
    name: TTranslatable;
};

type TSavedVideo = {
    id: number;
    name: string;
    original_url: string;
};

type TSavedImage = {
    alt_text: TTranslatable;
    original_url: string;
    id: number;
};

type TEstate = {
    estateId: string;
    name: string;
    featured: boolean;
    estateType: {
        slug: string;
        name: string;
    };
    price: string;
    area: {
        name: string;
        slug: string;
        city: {
            name: string;
            slug: string;
            county: {
                name: string;
                slug: string;
            };
        };
    };
    areaSize: number;
    yearBuilt: number;
    yearRenovated: number;
    coordinates: [number, number];
    parking: number | null;
    rooms: number | null;
    description: string;
    sold: boolean;
    radius: number;
    hashtags: {
        [key: string]: { name: string; id: number }[];
    };
    video: {
        url: string;
    };
    images: {
        altText: string;
        sources: {
            desktop: string;
            mobile: string;
            og: string;
        };
    }[];
};

type TWithCount = {
    count: number;
    name: string;
    slug: string;
};

type TMinEstate = {
    areaSize: number;
    estateId: string;
    estateTypeId: number;
    name: string;
    parking: number | null;
    price: number;
    rooms: number;
    sold: false | string;
    yearBuilt: number;
    yearRenovated: number;
    hashtags: number[];
};

type TBreadcrumb = {
    label: string;
    url: string;
};

type TRange = {
    from?: number;
    to?: number;
};

type TFeature = {
    name: string;
    id: number;
};

type TFeatureGroup = TFeature & {
    hashtags: TFeature[];
};

type TContactForm = {
    email: string;
    estate_id: string;
    id: number;
    msg: string;
    name: string;
    phone: string;
    read: boolean;
};
