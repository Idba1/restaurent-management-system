import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [showProfile, setShowProfile] = useState(false);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Debug And Dine</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="relative">
                            <button onClick={() => setShowProfile(prev => !prev)} className="btn btn-ghost">
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                            </button>
                            {showProfile && (
                                <div className="absolute right-0 mt-2 p-4 bg-white text-black shadow-lg rounded-lg w-48 md:w-64">
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={user.photoURL}
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    </div>

                                    {/* User Info */}
                                    <div className="text-center mb-4">
                                        <p className="font-semibold text-lg">{user.displayName}</p>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>

                                    {/* Links */}
                                    <ul className="space-y-2 mb-4">
                                        {user && isAdmin && (
                                            <li>
                                                <Link
                                                    to="/dashboard/adminHome"
                                                    className="text-blue-500 hover:text-blue-700 font-medium block text-center"
                                                >
                                                    Admin Dashboard
                                                </Link>
                                            </li>
                                        )}
                                        {user && !isAdmin && (
                                            <li>
                                                <Link
                                                    to="/dashboard/userHome"
                                                    className="text-blue-500 hover:text-blue-700 font-medium block text-center"
                                                >
                                                    User Dashboard
                                                </Link>
                                            </li>
                                        )}
                                    </ul>

                                    {/* Log Out Button */}
                                    <div className="flex justify-center">
                                        <button
                                            onClick={handleLogOut}
                                            className="btn btn-ghost w-full text-red-600 mt-4 hover:bg-red-50 focus:outline-none"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="btn btn-ghost">LogIn</Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default NavBar;