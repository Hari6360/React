import { useState } from "react";
import "./App.css";

const App = () => {
	let [counter, setCounter] = useState(0);
	const addvalue = () => {
		setCounter(counter + 1);
	};
	const reducevalue = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<>
			<h1>Counter App</h1>
			<h1>Counter Value:{counter}</h1>

			<button onClick={addvalue}>Add Value</button>
			<button onClick={reducevalue}>Reduce Value</button>
		</>
	);
};

export default App;
