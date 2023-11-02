import { useState } from "react";

const App = () => {
	const [color, setColor] = useState("black");
	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}>
			<div className="fixed flex flex-wrap justify-center inset-x-0  bottom-12 px-2">
				<div
					className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
					style={{ backgroundColor: "black" }}>
					<button
						onClick={() => setColor("red")}
						className="outline-none px-2 py-1 rounded-md text-white shadow-lg"
						style={{ backgroundColor: "Red" }}>
						Red
					</button>
					<button
						onClick={() => setColor("green")}
						className="outline-none px-2 py-1 rounded-md text-white shadow-lg"
						style={{ backgroundColor: "green" }}>
						green
					</button>
					<button
						onClick={() => setColor("blue")}
						className="outline-none px-2 py-1 rounded-md text-white shadow-lg"
						style={{ backgroundColor: "blue" }}>
						blue
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
