const getParamsFromUrl = <T>(urlStr: string) => {
    const urlObj = new URL(urlStr);
    const params = new URLSearchParams(urlObj.search);
    const paramsObj: Record<string, string> = {};
    params.forEach((value, key) => {
        paramsObj[key] = value;
    });

    return paramsObj as T;
};

export default getParamsFromUrl;
