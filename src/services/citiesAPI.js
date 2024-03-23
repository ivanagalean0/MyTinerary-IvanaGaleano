import axios from "axios";

export const getCities = async() => {
    try {
        const respuesta = await axios("http://localhost:4000/api/cities");
        return respuesta.data.data
    } catch (error) {
        return []
    }
}

export const getCityById = async ( id ) => {
    try {
        const respuesta = await axios('http://localhost:4000/api/cities/' + id)
        return respuesta.data
    } catch (error) {
        return {}
    }
}

