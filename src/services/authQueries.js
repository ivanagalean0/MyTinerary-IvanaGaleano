import axios from "axios";

const register = async ( data ) => {
    try {
        const response = await axios.post('http://localhost:4000/api/auth/register ', data)
        return response.data
        
    } catch (error) {
        return error.response.data
    }
}  

const login = async ( data ) => {
    try {
        const response = await axios.post('http://localhost:4000/api/auth/login', data)
        localStorage.setItem("token", response.data.data.token)
        return response.data
        
    } catch (error) {
        return error.response.data
    }
}   

const loginWithToken = async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post('http://localhost:4000/api/auth/token', {}, {
            headers: { Authorization: `Bearer ${token}`}
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}   

const update = async (data) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.put('http://localhost:4000/api/users/update', {}, {
            headers: { Authorization: `Bearer ${token}`}
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export default {
    register,
    login,
    loginWithToken,
    update
}

