import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value) {
			addTodo(value);
		} else {
			setValue("");
		}
	};
	return (
		<div className=" flex justify-center">
			<form onSubmit={handleSubmit} className="  w-48 mb-4 border-e-blue-950">
				<input
					value={value}
					className="w-48  text-center h-10"
					type="text"
					placeholder="Enter Your Task"
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					type="submit"
					className="w-48  text-center text-white"
					style={{ backgroundColor: "black" }}>
					Add Task
				</button>
			</form>
		</div>
	);
};

export default TodoInput;
