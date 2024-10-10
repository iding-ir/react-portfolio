import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { MINIMUM_FETCH_DELAY } from "../../constants";
import { Data } from "../../types";
import { Language } from "../language";

type GetDataArgs = { language: Language };
type GetPageArgs = { language: Language; file: string };

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: async (...params) => {
    await new Promise((resolve) => setTimeout(resolve, MINIMUM_FETCH_DELAY));
    return fetchBaseQuery({ baseUrl: "/" })(...params);
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getData: builder.query<Data, GetDataArgs>({
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
