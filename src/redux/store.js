import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slice/quotes";
import bookReducer from "./slice/bookmark";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    book: bookReducer,
  },
});
