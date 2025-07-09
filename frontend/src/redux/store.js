import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "../api/authApi";
import { protectedApi } from "../api/protectedApi";

export const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware,protectedApi.middleware)
})