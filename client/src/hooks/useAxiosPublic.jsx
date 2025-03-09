import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:9001'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;