import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Navbar;
