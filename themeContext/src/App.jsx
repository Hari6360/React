import React from "react";
import { ThemeProvider } from "./Context/theme";
import { useState } from "react";
import ThemeBtn from "./Components/themeBtn";
import Card from "./Components/card";
import { useEffect } from "react";

const App = () => {
	const [themeMode, setThemeMode] = useState("light");

	const lightThemeMode = () => {
		setThemeMode("light");
	};
	const darkThemeMode = () => {
		setThemeMode("dark");
	};
	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	return (
		<ThemeProvider value={{ themeMode, darkThemeMode, lightThemeMode }}>
			<div className="flex flex-wrap min-h-screen items-center">
				<div className="w-full">
					<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
						<ThemeBtn />
					</div>

					<div className="w-full max-w-sm mx-auto">
						<Card />
					</div>
				</div>
			</div>
			;
		</ThemeProvider>
	);
};

export default App;
