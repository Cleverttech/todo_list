import { useState } from "react";

import NewTodoForm from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo) return;
    const newTodoItem = {
      id: crypto.randomUUID(),
      newTodo: todo,
      isCompleted: false,
    };
    setTodos((todos)=> [...todos, newTodoItem]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
    }));
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos)=> prevTodos.filter((todo) => {
      return todo.id !== id;
    }));
  };

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList onDelete={deleteTodo} todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
