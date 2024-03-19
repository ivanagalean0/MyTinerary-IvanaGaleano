import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";

const store = {
    cities : citiesReducer
}

export default configureStore({
    reducer: store
})