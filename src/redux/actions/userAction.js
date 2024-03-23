import { createAction } from "@reduxjs/toolkit";

const login = createAction('login', (data) => {
    return { 
        payload: data 
    }
})

const logout = createAction('logout', () => {
    localStorage.removeItem('token')
    return { 
        payload: {} 
    }
})

const update = createAction('update', (data) => {
    return {
        payload: data
    }
})

export {
    login, 
    logout,
    update
}
