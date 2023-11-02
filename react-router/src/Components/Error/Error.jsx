// ErrorPage.js
import React from "react";

const ErrorPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-md text-center">
				<h1 className="text-2xl font-semibold text-red-600">Error Page</h1>
				<p className="text-gray-600">
					Sorry, something went wrong. Please try again later.
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
