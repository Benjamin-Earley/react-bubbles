import axios from 'axios';

export function getToken() {
    console.log(`Token: ${localStorage.getItem('token')}`)
    return localStorage.getItem('token');
};
export default function() {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            authorization: getToken()
        }
    });
};