    import api from "./axios";

    export const loginUser = async (data) =>{
        const res = await api.post("api/users/login", data)
        console.log("Login response from backend:", res.data); // 🔍 check structure
        return res.data
    }

export const createUser = async (data) =>{
    const res = await api.post("api/users/register", data)
    console.log("Register payload:", data);;
    return res.data
}

export const getAllUsers = async (data) =>{
    const res = await api.get("api/users/", data)
    return res.data
}

export const forgotPassword = async (data) =>{
    const res = await api.post("api//users/forgot-password", data)
    return res.data
}

export const resetPassword = async (data) =>{
    const res = await api.post("api/users/reset-password", data)
    return res.data
}