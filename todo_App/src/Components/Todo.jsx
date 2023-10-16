import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, completed: false, isEditing: false },
		]);
	};

	return (
		<div>
			<TodoInput addTodo={addTodo} />
			<div>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default Todo;
