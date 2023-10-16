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
	const handleDelete = (id) => {
		const updatedTodo = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodo);
	};

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};
	return (
		<div>
			<TodoInput handleAdd={addTodo} />
			<div>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleDelete={() => handleDelete(todo.id)}
						toggleComplete={toggleComplete}
						editTodo={editTodo}
					/>
				))}
			</div>
		</div>
	);
};

export default Todo;
