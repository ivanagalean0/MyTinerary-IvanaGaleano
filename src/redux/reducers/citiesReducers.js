import { createReducer } from "@reduxjs/toolkit";
import { agregarCiudades,  cambiarSearch, filtrarPorNombre } from "../actions/citiesAction";
import Cities from "../../views/Cities";

// PAYLOAD: trae la accion 
// REDUCER modifica el store 
// ...STATE: hace una copia de las propiedades que trae el estado inicial, para que no se pierdan las propiedades que no se modificaron 

const estadoInicial = {
    allCities : [],
    citiesFilter: [],
    search : ""
}

const citiesReducer = createReducer(estadoInicial, (builder) => {
    builder.addCase(agregarCiudades, (state, action) => {
        return{
            ...state,
            allCities : action.payload,
            citiesFilter : action.payload
        }
       
    }).addCase(filtrarPorNombre, (state, action) => {
        const aux = state.allCities.filter( ( city ) => {
            return city.name
            .toLowerCase()
            .startsWith(action.payload.toLowerCase().trim())
        })
        return {...state, citiesFilter: aux}

    }).addCase(cambiarSearch, (state, action) => {
        return {
            ...state,
            search: action.payload
        }
    })
})
export default citiesReducer;