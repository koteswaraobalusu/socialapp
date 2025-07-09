import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://127.0.0.1:8000/api/',}),
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(credentials)=>({
                url:'accounts/login/',
                method:'POST',
                body:credentials,
            }),
        }),
        logout:builder.mutation({
            query:()=>({
                url:'accounts/logout/',
                method:'POST'
            }),
        }),
        register:builder.mutation({
            query:(credentials)=>({
                url:'accounts/register/',
                method:'POST',
                body:credentials,
            }),
        }),

    }),
})

export const { useLoginMutation,useLogoutMutation,useRegisterMutation }=authApi
