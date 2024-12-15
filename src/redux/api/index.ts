import { fetchBaseQuery, retry, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  // const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://v6.exchangerate-api.com/v6/fad56bb6cfea68a33abff960/latest/USD",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token") as string;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

  const response = await rawBaseQuery(args, api, extraOptions);

  if (response.error) {
    const { status } = response.error;
    if (status === 401 || status === 403) {
      //   dispatch(signOut());
    }
  }

  return response;
};

const fetchBaseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQueryWithRetry,
  tagTypes: ["Exchange"],
  endpoints: () => ({}),
});
