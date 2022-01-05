import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uploadexample-backend22.herokuapp.com',
});

export default api;