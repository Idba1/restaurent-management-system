import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Registration from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/LogIn";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";

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
                    element: <PrivateRoute><Menu></Menu></PrivateRoute>,
                },
                {
                    path: 'order/:category',
                    element: <Order></Order>,
                },
                {
                    path: 'order/salad',
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
    }
]);


export default Routes;