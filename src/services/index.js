import axios from "axios";
import CONFIG_INITIAL_STATE  from './config';

const client = axios.create({baseURL: CONFIG_INITIAL_STATE.BASE_URL});
//axios.defaults.withCredentials = true

//Request interceptor
client.interceptors.request.use(
    function (config) {
        let token = JSON.parse(localStorage.getItem('token'));
        console.log("token: ", token)
        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (err) {
        throw new Error(err);
    }
);

const APIServices = {
    // User //
    register(data){
        return client.request(
            {
                method: "post",
                url: `${CONFIG_INITIAL_STATE.BASE_URL}/api/v1/register`,
                data: data
            },
            { crossdomain: true }
        )
    },

    //Vendor
    getListVendor(){
        return client.request(
            {
                method: "get",
                url: `${CONFIG_INITIAL_STATE.BASE_URL}/api/v1/vendor/list`,
            },
            {crossdomain: true }
        )
    },

    getVendorById(id){
        return client.request(
            {
                method: "get",
                url: `${CONFIG_INITIAL_STATE.BASE_URL}/api/v1/vendor/${id}`,
            },
            {crossdomain: true }
        )
    },

    //Category
    getListCategory(){
        return client.request(
            {
                method: "get",
                url: `${CONFIG_INITIAL_STATE.BASE_URL}/api/v1/category/list`,
            },
            {crossdomain: true }
        )
    },
}

export default APIServices