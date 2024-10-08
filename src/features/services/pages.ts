import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pageApi = createApi({
  reducerPath: "pageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
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
