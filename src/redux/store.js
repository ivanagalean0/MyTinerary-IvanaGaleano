import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import userReducer from "./reducers/userReducer";

const store = {
    cities : citiesReducer,
    user : userReducer
}

export default configureStore({
    reducer: store
})