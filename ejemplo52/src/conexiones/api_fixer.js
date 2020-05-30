import axios from 'axios';
import accounting from 'accounting';
import fx from 'money';

const fixerURL = 'http://data.fixer.io/api/latest';
const access_key = '310d239b67a8132ff4e850e1df2f71e7';

const openexURL = 'https://openexchangerates.org/api/latest.json'; 
const api_id = "f0ce15a803ac4bb9a8a42b2e09427ece";

export function monedaFixer() {
    axios.get(`${fixerURL}?access_key=${access_key}`)
    .then(response => {
        return response;
    })
    .catch(error => {
        console.error(error)
        return error;
    })
}

export function monedaOpenEx(base) {
    return axios.get(`${openexURL}?app_id=${api_id}&base=${base}`)
    .then(response => {
        let resultado = response.data.rates;
        let moneda, valor; 
        fx.rates = resultado;
        fx.base = base;
        let objetoMonedas = [];

        for (const key in resultado) {
            valor = resultado[key];
            moneda = key;
            objetoMonedas.push({monedaNombre: moneda, valorMoneda: valor});
        }

        return objetoMonedas;
    })
    .catch(error => {
        console.error(error);
        return error;
    })
}

export function conversion(aConver,base,a) {
    let convertido = accounting.toFixed((fx(aConver).convert({from:base,to:a})),4)
    return accounting.formatMoney(convertido, { symbol: a,  format: "%v %s" }); 
}

