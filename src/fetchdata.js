import axios from 'axios';


export const fetchUsers = () => axios.get('http://localhost:5000/users');


export const fetchUserAccountsByUsername = (username) => axios.get(`http://localhost:5000/accounts?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});

export const fetchAccountMovements = (username) => axios.get(`http://localhost:5000/movements?username=${username}`)
.then(response => {
    return response.data
})
.catch((error) => {
    console.log(error);
});



