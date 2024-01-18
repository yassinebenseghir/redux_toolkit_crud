import {configureStore} from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        },
        },composeWithDevTools());

