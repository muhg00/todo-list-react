import { useState, useEffect, useRef } from "react";
import "./App.css";
import Input from "./component/Input";
import Button from "./component/Button";
import Todolist from "./component/Todolist";
//examination
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const totalTask = todos.length;
  // const isFirstRender = useRef(true);
  const addCount = useRef(0);
  useEffect(() => {
    //  if (isFirstRender.current) {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      console.log("загружено из localStorage", JSON.parse(savedTodos));
      //}
    }
    // isFirstRender.current = false;
  }, []);
  useEffect(() => {
    //  if (!isFirstRender.current) {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("сохранен в localStorage", todos);
    //}
  }, [todos]);
  const addTodo = (e) => {
    e.preventDefault();
    addCount.current = addCount.current + 1;
    console.log(`добавлено задач ${addCount.current}`);
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const deleteTodo = (id) => {
    addCount.current = addCount.current - 1;
    console.log(`удаление задач ${addCount.current}`);
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      }),
    );
  };
  return (
    <>
      <h1>new Task</h1>
      <form className="input-button" onSubmit={addTodo}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" />
      </form>

      <h1>total task {totalTask}</h1>
      <Todolist todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </>
  );
}

export default App;
