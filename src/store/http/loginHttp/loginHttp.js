import axios from "axios";

const https = axios.create({
    baseURL: "http://localhost:9000/api"
});

export {https}