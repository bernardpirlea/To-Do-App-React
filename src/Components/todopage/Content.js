import React from "react";
import ToDoList from "./ToDoList";
import { useState } from "react";

const Content = () => {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const markDone = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].done = !toDoList[index].done;
    setToDoList(newToDoList);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    let newItem = { value: input, done: false };
    let newToDoList = [...toDoList, newItem];
    setToDoList(newToDoList);
    setInput("");
  };

  return (
    <main className="main">
      <form className="form col-12 col-md-7 col-lg-4">
        <div className="form-group col-8">
          <input
            type="text"
            class="form-control"
            onChange={handleChange}
            value={input}
          />
        </div>
        <button onClick={handleClick} className="btn btn-primary col-3">
          Add
        </button>
      </form>
      <ToDoList toDoList={toDoList} markDone={markDone} />
    </main>
  );
};

export default Content;
