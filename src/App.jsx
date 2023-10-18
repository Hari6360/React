import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
	const [length, setLength] = useState(8);
	const [number, setNumber] = useState(false);
	const [char, setChar] = useState(false);
	const [password, setPassword] = useState("");

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (number) str += "0123456789";
		if (char) str += "!@#$%^&*-_+=[]{}~`";

		for (let i = 0; i <= length; i++) {
			let character = Math.floor(Math.random() * str.length + 1);

			pass += str.charAt(character);
		}
		setPassword(pass);
	}, [length, number, char, password]);

	useEffect(() => {
		passwordGenerator();
		return () => {};
	}, [length, number, char, setPassword]);

	const passwordRef = useRef(null);

	const handleCopy = useCallback(() => {
		window.navigator.clipboard.writeText(password);
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 100);
	}, [password]);

	return (
		<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
			<h1 className="text-white text-center my-3">Password Generator</h1>
			<div className="flex shadow rounded-lg overflow-hidden mb-4">
				<input
					type="text"
					value={password}
					className="outline-none w-full py-1 px-3"
					placeholder="Password"
					readOnly
					ref={passwordRef}
				/>
				<button
					className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
					onClick={handleCopy}>
					Copy
				</button>
			</div>
			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						min={6}
						max={100}
						value={length}
						onChange={(e) => {
							setLength(e.target.value);
						}}
					/>
					<label>Length: {length}</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						defaultChecked={number}
						id="numberInput"
						onChange={() => {
							setNumber((prev) => !prev);
						}}
					/>
					<label htmlFor="numberInput">Numbers</label>
				</div>
				<div className="flex items-center gap-x-1">
					<input
						type="checkbox"
						defaultChecked={char}
						id="characterInput"
						onChange={() => {
							setChar((prev) => !prev);
						}}
					/>
					<label htmlFor="characterInput">Characters</label>
				</div>
			</div>
		</div>
	);
};

export default App;
