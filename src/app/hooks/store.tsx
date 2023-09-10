import {configureStore} from '@reduxjs/toolkit';
import darkModeReducer from './Feature.ts/darkModeSlice'
export const store = configureStore({
    reducer:{
       darkMode:darkModeReducer
    }
});