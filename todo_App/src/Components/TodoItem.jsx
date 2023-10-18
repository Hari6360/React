import PropTypes from "prop-types";

const TodoItem = ({ todo, handleDelete, toggleComplete, editTodo }) => {
	const todostatusstyle = {
		color: todo.completed ? "green" : "red",
	};

	return (
		<div className=" flex  justify-center my-2 p-2 " style={todostatusstyle}>
			<div className="mr-2  ">
				<p
					className={`font-bold text-lg p-2 rounded ${
						todo.completed ? "text-green-600" : "text-red-600"
					}`}
					style={{ backgroundColor: "Black" }}>
					{todo.task}-{todo.completed ? " Done" : "Not Done"}
				</p>
			</div>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => toggleComplete(todo.id)}>
				Toggle Todo
			</button>
			<button
				className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded"
				onClick={(e) => handleDelete(parseInt(e.target.id))}>
				Delete Todo
			</button>
			<button
				className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold py-2 px-4 rounded"
				onClick={() => editTodo(todo.id)}>
				Edit Todo
			</button>
		</div>
	);
};
TodoItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.string.isRequired,
		task: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		isEditing: PropTypes.bool.isRequired,
	}).isRequired,
	handleDelete: PropTypes.func.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
