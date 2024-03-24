import axios from 'axios';

const baseUrl= 'https://school-back-end.onrender.com'

export const getAssignments = async (data) => {
    const options = {
        url: `${baseUrl}/assignments/`,
        method: 'GET',
        headers: {
            contentType: 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }

    const response = await axios(options)
    return response;
}

export const createAssignment = async (data) => {
    console.log('create assign data',  data)
    const options = {
        url: `${baseUrl}/assignments/create`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: data
    }

    const response = await axios(options)
    return response;
}

export const updateAssignment = async (data) => {
    const options = {
        url: `${baseUrl}/assignments/update`,
        method: 'PUT',
        headers: {
            contentType: 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: data
    }
    const response = await axios(options)
    return response;
}

export const submitAssignment = async (data) => {
    console.log('Submit assign data',  data)
    const options = {
        url: `${baseUrl}/assignments/submit`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: data
    }
    const response = await axios(options)
    return response;
}

export const login = async (data) => {
    console.log('login data',  data)
    const options = {
        url: `${baseUrl}/login`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    }
    const response = await axios(options)
    return response;
}

