import { createReducer } from "@reduxjs/toolkit";
import { login, update } from "../actions/userAction";
import { logout } from "../actions/userAction";

const initialState = {
    user: {}
}

const userReducer  = createReducer( initialState, (builder) => {
    builder.addCase(login, (state, action) => {
        return {...state, user: action.payload}
    }).addCase(logout, () => {
        return initialState
    }).addCase(update, (state, action) => {
        const aux = {...action.payload}
        delete aux.token
        const newStore = Object.assign( {}, state.user, aux)
        console.log(newStore);
        return {...state, user: newStore }
    })
})

export default userReducer;
