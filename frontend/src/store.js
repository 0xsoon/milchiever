import { configureStore } from "@reduxjs/toolkit";

import modalReducer from './slicers/modalSlice';

export default configureStore({
    reducer: {
        modal: modalReducer
    }
})