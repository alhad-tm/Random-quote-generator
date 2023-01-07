import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slice/quotes"


export const store=configureStore({
    reducer:{
        quote:quoteReducer
    }
})
