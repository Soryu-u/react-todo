import axios from "axios";

const baseURL = "http://10.177.1.5:8000";

const httpClient = axios.create({baseURL})

export default httpClient
