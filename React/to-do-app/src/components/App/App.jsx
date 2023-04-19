import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const addItem = () => {
    let newList = [...list];
    newList.push(taskValue);
    setList(newList);
    setTaskValue("");
  };

  const removeItem = (item) => {
    const newList = list.filter((val) => {
      return val !== item;
    });
    setList(newList);
  };

  return (
    <>
      <div className="header">
        <h1>to do application</h1>
        <input
          type="text"
          placeholder="Add a task"
          name="task"
          id="task-input"
          value={taskValue}
          onChangeCapture={(e) => setTaskValue(e.target.value)}
        />
        <button onClick={addItem} id="task-btn">
          Add
        </button>
      </div>
      <TaskList list={list} removeItem={removeItem}></TaskList>
    </>
  );
};

export default App;
