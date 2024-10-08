import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { MINIMUM_FETCH_DELAY } from "../../constants";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: async (...params) => {
    await new Promise((resolve) => setTimeout(resolve, MINIMUM_FETCH_DELAY));
    return fetchBaseQuery({ baseUrl: "/" })(...params);
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getRoutesByLanguage: builder.query({
      query: ({ language }) => `pages/${language}/index.json`,
    }),
    getPageByPath: builder.query({
      query: ({ language, pathname }) => `pages/${language}${pathname}.json`,
    }),
  }),
});

export const { useGetPageByPathQuery, useGetRoutesByLanguageQuery } = pageApi;
