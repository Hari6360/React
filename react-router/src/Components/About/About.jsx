import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();

	const ContactPage = () => {
		navigate("/Contact");
		alert("Hi");
	};
	return (
		<>
			<div>About Page</div>
			<button
				onClick={() => {
					ContactPage();
				}}>
				Go to Contact Page
			</button>
		</>
	);
};

export default About;
