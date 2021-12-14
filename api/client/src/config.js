import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://react-mern-social-app.herokuapp.com/api/"
})