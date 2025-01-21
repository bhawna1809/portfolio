// Navbar.js
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10 bg-blue-200">
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold">
                   Bhawna Tekwani
                </h3>
                <ul className="flex gap-3 align-center p-1 flex-wrap">
                    <li>
                    <Link to="/">
                        <span className="text-sm sm:text-base px-2 lg:px-5 
                                      py-2 transition rounded hover:text-white 
                                      hover:bg-blue-600">
                        About
                        </span></Link>
                    </li>
                    <li>
                    <Link to="/skills"> 
                        <span className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-blue-600">
                           
                            Skills
                        </span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/projects"> 
                        <span className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-blue-600">
                            Projects
                        </span> </Link>
                    </li>
                    <li>
                    <Link to="/certificates"> 
                        <span className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-blue-600">
                        Certification
                        </span></Link>
                    </li>
                    <li>
                    <Link to="/contact"> 
                        <span className="text-sm sm:text-base px-2 lg:px-5 py-2 
                                      transition rounded hover:text-white 
                                      hover:bg-blue-600">
                        Contact
                        </span></Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </nav>
    );
}
