import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  const [toDoToShow, setToDoToShow] = useState("to do");
  const [toggleAllComplete, setToggleAllComplete] = useState("true")
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateToDoShow = (e) => {
    setToDoToShow(e);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  if (toDoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete);

  } else if (toDoToShow === "completed") {
    todos = todos.filter((todo) => todo.complete);
  }
  const RemoveComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  }
  const  allComplete  = () => {
    setTodos(todos.map((todo) => {
      return {
        ...todo,
        complete: !todo.complete,
      }

    }))
    setToggleAllComplete(!toggleAllComplete);
  }
  return (
    <div className="container">
      <TodoForm submit={addTodo} />

      {
        todos.length > 0 ? todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            ondelete={() => {
              handleDelete(todo.id);
            }}
            toggle={() => {toggleComplete(todo.id)}}
          />
        )): <h2 className="notasks">No Tasks {`${toDoToShow}`} </h2>
      }
      <div className="buttons">
        <button className="btn" onClick={() => updateToDoShow("to do")}>
          all
        </button>
        <button className="btn" onClick={() => updateToDoShow("active")}>
          active
        </button>
        <button className="btn" onClick={() => updateToDoShow("completed")}>
          complete
        </button>
      </div>
      <div style={{display: todos.length > 0 ? "block": "none"}} className="toggle" onClick={RemoveComplete}>Remove all completed todos</div>
      <div className="toggle" onClick={allComplete}>Toggle all complete : {`${toggleAllComplete}`}</div>
    </div>
  );
}

export default App;
