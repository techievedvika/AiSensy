import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

function get(url){
    return axios.get(baseURL+url);
}
function deleteApi(url){
    return axios.delete(baseURL+url);
}
function post(url,data){
    return axios.post(baseURL+url,data)
}
function put(url, obj) {
    return axios.put(baseURL + url, obj);
}

export default {
    get,
    post,
    put,
    deleteApi
};
