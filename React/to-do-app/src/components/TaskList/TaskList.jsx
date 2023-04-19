import { useState } from "react";
import ControlButton from "../ControlButton/ControlButton";
import "./TaskList.css";

const TaskList = ({ list, removeItem }) => {
  const [taskClass, setTaskClass] = useState("task");

  const completedItem = () => {
    if (taskClass.includes("task-completed")) {
      setTaskClass("task");
    } else {
      setTaskClass("task task-completed");
    }
  };

  return (
    <>
      {list.length !== 0 ? (
        <div className="task-list">
          {list.map((value, index) => (
            <li key={index} className="task-item">
              <span className={taskClass}>{value}</span>
              <span className="controls">
                <ControlButton
                  type="complete-btn"
                  onClick={completedItem}
                ></ControlButton>
                <ControlButton
                  type="remove-btn"
                  onClick={() => removeItem(value)}
                ></ControlButton>
              </span>
            </li>
          ))}
        </div>
      ) : (
        <div className="task-list">
          <p>List is Empty</p>
        </div>
      )}
    </>
  );
};

export default TaskList;
