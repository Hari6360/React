import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
	const { cart } = useContext(CartContext);
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "end",
				border: "1px solid red",
				fontSize: "25px",
				margin: "10px",
				padding: "15px",
			}}>
			Cart:{cart}
		</nav>
	);
};

export default Navbar;
