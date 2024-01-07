import { createSlice } from "@reduxjs/toolkit";

const intialStates = {
    books: [
        {
            id: 1, title: 'Quiet Well', author: 'Turza',
        },
        {
            id: 2, title: 'Beautifull BD', author: 'Montasir',
        }
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
        deleteBook: (state, action) => {
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id);
        },
    },
});

export const { showBooks, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;