import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { protectedApi } from "../api/protectedApi";



const rootReducer=combineReducers({

    [authApi.reducerPath]:authApi.reducer,
    [protectedApi.reducerPath]:protectedApi.reducer,

})

export default rootReducer;