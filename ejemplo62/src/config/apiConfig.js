import axios from 'axios';
import store from '../store/store';

let url_base = "https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels";

export const APIGET = async function(datosParams){
    let response = await axios.get(`${url_base}/${datosParams}`, {  headers: {
        'Authorization': `Bearer ${store.state.tokenLogin}`
      }});
    return response.data;
}

export const APIPOST = async function(datosRecibidos){
    let response = await axios.post(`${url_base}/users/login`, {
        "username": datosRecibidos.username,
        "password": datosRecibidos.password
    });
    return response.data;
}