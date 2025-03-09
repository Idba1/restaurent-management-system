import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:9001'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;