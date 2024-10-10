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
    getDataByLanguage: builder.query({
      query: ({ language }) => `data/${language}/index.json`,
    }),
    getPageContentByFile: builder.query({
      query: ({ language, file }) => ({
        url: `data/${language}/${file}`,
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useGetPageContentByFileQuery, useGetDataByLanguageQuery } =
  pageApi;
