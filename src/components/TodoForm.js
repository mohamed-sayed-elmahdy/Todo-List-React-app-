import { React, useState } from "react";
import shortid from "shortid";

function TodoForm(props) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="input-field"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
