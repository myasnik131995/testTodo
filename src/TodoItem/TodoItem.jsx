import React from "react";
import styles from "../style/app.css";

const TodoItem = ({title, id, complete, todos, props, remove}) => {



  return (
    <li className="todo">
      <input type="checkbox" defaultChecked={false} />
      <span>{title}</span>
      <button className="todo_change_btn">✎</button>
      <button onClick={() => props.remove(props.id)} className="todo_change_btn">✘</button>
    </li>
  );
};

export default TodoItem;
