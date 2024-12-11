import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DataType } from "../../types";
import { GetDataArgs, GetPageArgs } from "./types";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: async (...params) => {
    const delay = import.meta.env.VITE_MINIMUM_FETCH_DELAY as number;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchBaseQuery({ baseUrl: "/" })(...params);
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getData: builder.query<DataType, GetDataArgs>({
      query: ({ language }) => `data/${language}/index.json`,
    }),
    getPage: builder.query<string, GetPageArgs>({
      query: ({ language, file }) => ({
        url: `data/${language}/${file}`,
        responseHandler: "text",
      }),
    }),
  }),
});

export const { useGetPageQuery, useGetDataQuery } = dataApi;
