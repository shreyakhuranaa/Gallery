import { configureStore } from "@reduxjs/toolkit"; 
import gallerySlice from "./reducers/gallerySlice";

const store = configureStore({
    reducer: {
        gallery: gallerySlice,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

export default store;
