import { $fetch, FetchOptions } from "ofetch";
import { METHOD } from "@/api/types";

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

const fetchCoreConfig = (method: METHOD): FetchOptions<"json"> => {
  return {
    baseURL, // NON MOCKUP
    method,
    timeout: 10000,
    onRequestError: (ctx) => {
      const { request, response, error } = ctx;
      // throw new Error('Failed to Delete Invoice');
    },
    onResponseError: (ctx) => {
      const { error, response, request } = ctx;
      // console.log(error, response);
      // throw new Error('Failed to Delete Invoice');
    },
  };
};

export const getFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {}
) => {
  const config = fetchCoreConfig(METHOD.GET);
  return $fetch<Res>(url, { ...options, ...config });
};

export const postFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {}
) => {
  const config = fetchCoreConfig(METHOD.POST);

  return $fetch<Res>(url, { ...options, ...config });
};

export const putFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {}
) => {
  const config = fetchCoreConfig(METHOD.PUT);
  return $fetch<Res>(url, { ...options, ...config });
};

export const deleteFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {}
) => {
  const config = fetchCoreConfig(METHOD.DELETE);
  return $fetch<Res>(url, { ...options, ...config });
};

export const patchFetch = <Res>(
  url: string,
  options: FetchOptions<"json"> = {}
) => {
  const config = fetchCoreConfig(METHOD.PATCH);
  return $fetch<Res>(url, { ...options, ...config });
};
