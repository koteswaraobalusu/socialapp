import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const protectedApi=createApi({
    reducerPath:'protectedApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://127.0.0.1:8000/api/',credentials:'include'}),
    endpoints:(builder)=>({
        checkauth:builder.query({
            query:()=>'accounts/check-auth/',
        }),
    }),
})

export const { useLazyCheckauthQuery }=protectedApi;