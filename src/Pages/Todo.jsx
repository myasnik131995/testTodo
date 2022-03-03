import axios from "axios";
import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "first", complete: false },
    { id: 2, title: "second", complete: false },
    { id: 3, title: "third", complete: true },
    { id: 4, title: "fourth", complete: false },
  ]);
  const [todoName, setTodoName] = useState("");

  const addTodoKey = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        { id: Date.now(), title: todoName, complete: false },
      ]);
      setTodoName("");
    }
  };

  const addTodoBtn = () => {
    setTodos([...todos, { id: Date.now(), title: todoName, complete: false }]);
    setTodoName("");
  };

  async function fetchTodos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response);
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id))

  }


  return (
    <div className="todo_wrapper">
      <h1>Todo test</h1>
      <button className="todo_btn" onClick={fetchTodos}>GET TODOS</button>
      <div>
        <input
          type="text"
          placeholder="Todo name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          onKeyPress={addTodoKey}
        />
      </div>
      <button className="todo_btn" onClick={addTodoBtn}>ADD TODO</button>
      <div className="todo_list_container">
        <TodoList 
        todos={todos}
        remove={removeTodo}/>
      </div>
    </div>
  );
};

export default Todo;
