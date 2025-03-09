import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            if (!user?.email) {
                return [];
            }

            try {
                const res = await axiosSecure.get(`/carts?email=${user.email}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching cart data:", error);
                return [];
            }
        },
        enabled: !!user?.email, 
    });

    return [cart, refetch];
};


export default useCart;