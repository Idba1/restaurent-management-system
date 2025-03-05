import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* outlet */}
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;