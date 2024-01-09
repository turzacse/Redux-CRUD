import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const [books, setBooks] = useState([]);
useEffect( () => {
    fetch()
} ,[])
const intialStates = {
    books: [
        { "id": 1, "title": "Quiet Well", "author": "Turza" },
        { "id": 2, "title": "Beautiful BD", "author": "Montasir" },
        { "id": 3, "title": "Serenity Lake", "author": "Siam" },
        { "id": 4, "title": "Mystic Forest", "author": "Fahim" },
        { "id": 5, "title": "Eternal Sunshine", "author": "Harrison" },
        { "id": 6, "title": "Whispering Meadows", "author": "Sophie" },
        { "id": 7, "title": "Tranquil Echoes", "author": "Nathan" },
        { "id": 8, "title": "Harmony Haven", "author": "Isabella" },
        { "id": 9, "title": "Calm Breeze", "author": "Jacob" },
        { "id": 10, "title": "Enchanted Valley", "author": "Aria" }
    ]    
};

export const bookSlice = createSlice( {
    name: "books",
    initialState: intialStates,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const { id, title, author} = action.payload;
            const exsits = state.books.filter(book => book.id === id);
            if(exsits) {
                exsits[0].title = title;
                exsits[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
    },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;