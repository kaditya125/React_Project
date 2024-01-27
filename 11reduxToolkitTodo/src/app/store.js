import {configureStore} from '@reduxjs/toolkit';
// src/app/store.js
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})