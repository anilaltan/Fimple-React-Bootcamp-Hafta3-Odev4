import { useFormik } from "formik";

function TodoForm({ setNewTodos, todos }) {
  // Destructure properties from the result of the `useFormik` hook
  const { handleSubmit, handleChange, values } = useFormik({
    // Initial values for the form fields
    initialValues: {
      todoText: "",
      isCompleted: false,
    },
    // Function to handle form submission
    onSubmit: (values, { resetForm }) => {
      // Update the todos state with the new to-do item
      setNewTodos([...todos, values]);
      // Reset the form after submission
      resetForm();
    },
  });

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          name="todoText"
          value={values.todoText}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

export default TodoForm;
