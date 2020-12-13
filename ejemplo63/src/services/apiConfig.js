import axios from 'axios';

let urlBase = "http://localhost:3000";

export const getApi = async (parametro) => {
    try {
        let resultado = await axios.get(`${urlBase}/${parametro}`);
        return resultado.data; 
    } catch (error) {
        console.error(error);
    }
};