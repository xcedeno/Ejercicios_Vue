/* eslint-disable */
import axios from 'axios';

axios.defaults.baseURL = "https://api.fullstackweekly.com/";

axios.interceptors.request.use(function (config) {
    console.log("config");
    console.log(config);
    if (typeof window == 'undefined') {
        return config
    }  
    const token = window.localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    };
    return config
})

const appService = {
    getPost(categoryId){
        return new Promise((resolve)=>{
            axios.get(`wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
            .then(response => {
                console.log("response data getPost");
                console.log(response.data);
                resolve(response.data)
            })
        });
    },
    login(credentials){
        return new Promise((resolve,reject) => {
            axios.post(`services/auth.php`,credentials)
                .then(response => {
                    console.log("login");
                    console.log(response);
                    resolve(response.data)
                })
                .catch(error => {
                    console.error(error);
                    reject(error.status)
                });
        });
    },
    getProfile(){
        return new Promise( (resolve,rej) => {
            axios.get('services/profile.php',{
                headers: {
                    'Authorization': `Bearer ${window.localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    console.log("response getProfile");
                    console.log(response);
                    resolve(response.data);
                })
                .catch(error => {
                    console.error(error);
                    rej(error.status);
                })
        });
    }
};

export default appService;