import axios from "axios";

const Api = axios.create({
    baseURL: 'https://api-mongodb-9be7.onrender.com/api',
    headers:{
        'Content-Type': 'application/json'
    }
});

export {
    Api
}