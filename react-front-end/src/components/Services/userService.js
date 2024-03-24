import axios from "axios";



const baseUrl= 'https://school-back-end.onrender.com'


export const fetchStudentAssignments = async (studentId) => {
    console.log('fetch students assingments', studentId)
    const options = {
        url: `${baseUrl}/assignments/student`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            studentId,
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    }
    const response = await axios(options)
    return response;
}

export const fetchStudents = async (data) => {
    console.log('fetchStudents',  data)
    const options = {
        url: `${baseUrl}/students`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: data
    }
    const response = await axios(options)
    return response;
}