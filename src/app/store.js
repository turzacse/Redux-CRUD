import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Feature/Books/BookSlice";


const store = configureStore({
    reducer: {
        bookReducer: booksReducer,
    },
});

export default store;