import React from "react";

function Todo(props) {
  return (
    <div className="todoConatainer">
      <div
        style={{ textDecorationLine: props.todo.complete ? "line-through" : "", textDecorationColor: "red" }}
        onClick={props.toggle}
      >
        {props.todo.text}
      </div>
      <button className="delete-btn" onClick={props.ondelete}>
        x
      </button>
    </div>
  );
}

export default Todo;
