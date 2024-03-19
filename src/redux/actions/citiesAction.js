import { createAction } from "@reduxjs/toolkit";

export const agregarCiudades = createAction('agregarCiudades', (cities) => {
    return {
        // key: value (si tiene el mismo nombre lo puedo simplificar poniendo el nombre una vez) (cities: cities)
        payload : cities
    }
})

export const filtrarPorNombre = createAction('filterByName', (value) => {
    return {
        payload : value
    }
}) 

export const cambiarSearch = createAction('cambiarSearch', (nuevoSearch) => {
    return {
        payload : nuevoSearch
    }
})
