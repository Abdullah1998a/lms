import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center gap-2 bg-neutral-100 p-4">
            <NavLink to="/">الصفحة الرئيسية</NavLink>
            <NavLink to="/lessons">الدروس</NavLink>
            <NavLink to="/statistics">الإحصائيات</NavLink>
            <NavLink
                to="/register"
                className="register"
            >
                تسجيل
            </NavLink>
        </nav>
    );
};

export default Navbar;
