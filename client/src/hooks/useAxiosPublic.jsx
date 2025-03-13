import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-three-umber-95.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;