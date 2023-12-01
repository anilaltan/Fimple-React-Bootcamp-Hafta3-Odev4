import { useState } from "react";

function TodoList({ setNewTodos, todos }) {
  // State variable for filtering the displayed todos
  const [filterText, setFilterText] = useState("");

  // Filter the todos based on the filterText
  const filtered = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText)
    );
  });

  // Remove a specific todo item
  const removeTodo = (value) => {
    setNewTodos((oldValues) => {
      return oldValues.filter((todo) => todo !== value);
    });
  };

  // Remove all completed todos
  const removeCompletedTodos = () => {
    setNewTodos((oldValues) => {
      return oldValues.filter((todo) => todo.isCompleted == false);
    });
  };

  // Handle checking/unchecking of a todo item
  const handleChecked = (index) => {
    setNewTodos((oldValues) =>
      oldValues.map((obj, i) => {
        if (i === index) {
          return { ...obj, isCompleted: !obj.isCompleted };
        }

        return obj;
      })
    );
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filtered.map((todo, index) => (
          <li key={index} className={`${todo.isCompleted ? "completed" : ""}`}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleChecked(index)}
              />
              <label>{todo.todoText}</label>
              <button className="destroy" onClick={() => removeTodo(todo)} />
            </div>
          </li>
        ))}
      </ul>

      <footer className="footer">
        <span className="todo-count">
          <strong>{filtered.length}</strong> items left
        </span>

        <ul className="filters">
          <li>
            <a href="#" className="selected" onClick={() => setFilterText("")}>
              All
            </a>
          </li>
          <li>
            <a href="#/active" onClick={() => setFilterText(false)}>
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" onClick={() => setFilterText(true)}>
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={removeCompletedTodos}>
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default TodoList;
