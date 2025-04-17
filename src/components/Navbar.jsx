import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-2 bg-neutral-200 p-4">
            <NavLink to="/lessons">الدروس</NavLink>
        </nav>
    );
};

export default Navbar;
