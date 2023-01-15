import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import noteReducer from "../features/note/noteSlice"

// const persistConfig = {
//     key: 'root',
//     storage,
// }
export const store = configureStore({
    reducer:{
        note:noteReducer
    }
})