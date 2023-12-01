import { useState } from "react";

// Import TodoForm and TodoList components
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  // Define a state variable called todos with initial values
  const [todos, setNewTodos] = useState([
    { todoText: "Learn JavaScript", isCompleted: true },
    { todoText: "Learn React", isCompleted: false },
    { todoText: "Have a life!", isCompleted: false },
  ]);

  return (
    <div className="todoapp">
      {/* Use the TodoForm and TodoList components, passing setNewTodos and todos as props */}
      <TodoForm setNewTodos={setNewTodos} todos={todos} />
      <TodoList setNewTodos={setNewTodos} todos={todos} />
    </div>
  );
}

export default Todo;
