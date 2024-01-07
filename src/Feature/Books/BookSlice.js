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