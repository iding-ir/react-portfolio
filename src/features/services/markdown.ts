import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const markdownApi = createApi({
  reducerPath: "markdownApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMarkdownByRoute: builder.query({
      query: ({ language, pathname }) =>
        `markdowns/${language}${pathname}.json`,
    }),
  }),
});

export const { useGetMarkdownByRouteQuery } = markdownApi;
