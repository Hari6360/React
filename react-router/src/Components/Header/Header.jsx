import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<header className="bg-blue-500 p-4">
				<div className="container mx-auto">
					<div className="flex items-center justify-between">
						<a className="text-white text-2xl font-semibold" href="#">
							Logo
						</a>
						<nav>
							<ul className="flex space-x-4">
								<li>
									<NavLink
										exact={true.toString()}
										to="/"
										className="text-white hover:text-gray-300">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										className="text-white hover:text-gray-300 ">
										About
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/contact"
										className="text-white hover:text-gray-300">
										Contact
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
