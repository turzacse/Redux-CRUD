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
    },
});

export const { showBooks, addBook } = bookSlice.actions;
export default bookSlice.reducer;