import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-2 bg-neutral-100 p-4">
            <NavLink to="/">الصفحة الرئيسية</NavLink>
            <NavLink to="/lessons">الدروس</NavLink>
            <NavLink to="/statistics">الإحصائيات</NavLink>
        </nav>
    );
};

export default Navbar;
