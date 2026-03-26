function Todolist({ todos, onToggle, onDelete }) {
  if (todos.length == 0) {
    return <p>no task yet ,add one above</p>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            //className={todo.completed ? "completed" : ""}
            onChange={() => onToggle(todo.id)}
            checked={todo.completed}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "10px",
            }}>
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            style={{ border: "none", background: "none", cursor: "pointer" }}>
            <span
              style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}>
              &times;
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Todolist;
