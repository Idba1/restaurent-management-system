import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/LogIn";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: 'menu',
                    element: <Menu></Menu>,
                    // element: <PrivateRoute><Menu></Menu></PrivateRoute>,
                },
                {
                    path: 'order/:category',
                    element: <Order></Order>,
                },
                {
                    path: 'order',
                    element: <Order></Order>,
                },
                {
                    path: '/signup',
                    element: <Registration></Registration>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
            ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },

            // admin routes
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            },
            {
                path: 'manageItems',
                element: <ManageItems></ManageItems>
            },
            {
                path: 'updateItem/:id',
                element: <UpdateItem></UpdateItem>,
                // loader: ({ params }) => fetch(`https://server-three-umber-95.vercel.app/menu/${params._id}`)

            },
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
        ]
    }
]);


export default Routes;