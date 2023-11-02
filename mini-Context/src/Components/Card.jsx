import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Card = () => {
	const { handleChange } = useContext(CartContext);
	return (
		<div
			style={{ height: 300, width: 200, padding: "10px", background: "teal" }}>
			<button
				onClick={() => {
					handleChange(1);
				}}>
				Add to cart
			</button>
		</div>
	);
};

export default Card;
