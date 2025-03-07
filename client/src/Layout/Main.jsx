import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    const location = useLocation();
    // console.log(location)
    const noHeaderFooter =  location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {/* Navbar */}
            {noHeaderFooter || <Navbar></Navbar>}
            {/* outlet */}
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;