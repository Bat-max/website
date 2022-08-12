import qs from "qs";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
  }${path}`;
}

export async function fetchApiService(
  path,
  urlParamsObject = {},
  options = {}
) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);

  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    return false;
  }

  const data = await response.json();

  return data;
}

export const fetchAPI = async (path, urlParamsObject = {}, options) => {
  const localizedResp = await fetchApiService(path, urlParamsObject, options);

  if (localizedResp === false) {
    const defaultLangOptions = {
      ...urlParamsObject,
      locale: "pl-PL",
    };

    const fallbackResp = await fetchApiService(
      path,
      defaultLangOptions,
      options
    );

    if (fallbackResp) {
      return fallbackResp;
    } else {
      return {
        ok: false,
        message: "Failed to fetch data",
      };
    }
  } else {
    return localizedResp;
  }
};
