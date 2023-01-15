import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        createNote: (state, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
         return state.filter(note => note.id !== action.payload)
        },
        searchNote: (state, action) => {

        },
    }
})

export const {createNote,deleteNote,searchNote} = noteSlice.actions;
export default noteSlice.reducer;