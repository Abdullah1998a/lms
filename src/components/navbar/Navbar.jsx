import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleBar = () => {
        setShow(!show);
    };

    const closeBar = () => {
        setShow(false);
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [show]);
    return (
        <>
            <nav className="w-full flex items-center justify-between bg-neutral-50 p-4">
                <img src={logo} alt="logo" className="w-9" />
                <div className="hidden md:flex items-center gap-4">
                    <NavLink
                        to="/"
                        className="p-2 hover:bg-neutral-50 rounded-md"
                    >
                        الصفحة الرئيسية
                    </NavLink>
                    <NavLink
                        to="/lessons"
                        className="p-2 hover:bg-neutral-50 rounded-md"
                    >
                        الدروس
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className="p-2 hover:bg-neutral-50 rounded-md"
                    >
                        الإحصائيات
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        تسجيل
                    </NavLink>
                </div>
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={toggleBar}
                        className="p-2 rounded-md hover:bg-neutral-200 transition-colors"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-200 ease-in-out z-50 ${
                    show ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">القائمة</h2>
                    <button
                        onClick={closeBar}
                        className="p-2 rounded-md hover:bg-neutral-200 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex flex-col p-4 space-y-4 text-right">
                    <NavLink
                        to="/"
                        className="p-2 hover:bg-neutral-50 rounded-md text-center"
                        onClick={closeBar}
                    >
                        الصفحة الرئيسية
                    </NavLink>
                    <NavLink
                        to="/lessons"
                        className="p-2 hover:bg-neutral-50 rounded-md text-center"
                        onClick={closeBar}
                    >
                        الدروس
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className="p-2 hover:bg-neutral-50 rounded-md text-center"
                        onClick={closeBar}
                    >
                        الإحصائيات
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center"
                        onClick={closeBar}
                    >
                        تسجيل
                    </NavLink>
                </div>
            </div>
            {show && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-40"
                    onClick={closeBar}
                ></div>
            )}
        </>
    );
};

export default Navbar;
