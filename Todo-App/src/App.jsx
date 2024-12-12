import { useState } from "react";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todoArray, setTodoArray] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  function handelInput(e) {
    setTodoInput(e.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (todoInput) {
      const arrayValue = {
        task: todoInput,
        isCompleted: false,
      };

      const updatedArray = [...todoArray, arrayValue]

      localStorage.setItem("todo", JSON.stringify(updatedArray)) || [];
      setTodoArray(updatedArray);
      setTodoInput("");
    }
  }

  function deleteTodo(index) {
    const value = todoArray.filter((element, i) => i !== index);
    localStorage.setItem("todo", JSON.stringify(value)) || [];
    setTodoArray(value);
  }

  function completedTodo(index) {
    const completed = [...todoArray];
    completed[index].isCompleted = true;
    localStorage.setItem('todo', JSON.stringify(completed)) || [];
    setTodoArray(completed);
  }

  return (
    <div className="App">
      <h2>ToDo Application</h2>
      <div className="container">
        <form>
          <label>Enter Todo : </label>
          <input
            type="text"
            placeholder="Enter todo..."
            value={todoInput}
            onChange={handelInput}
          />
          <button onClick={addTodo}>Add Todo</button>
        </form>
        <div className="todocontainer">
          {todoArray.map((element, index) => {
            return (
              <div
                key={index}
                className="item"
                style={{
                  backgroundColor: element.isCompleted
                    ? "lightgreen"
                    : "#ffffff",
                  textDecoration: element.isCompleted ? "line-through" : "",
                }}
              >
                <p>{element.task}</p>
                <div>
                  <button onClick={() => completedTodo(index)}>Done</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
