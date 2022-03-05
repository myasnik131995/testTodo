import React, { useState } from "react";

const TodoList = ({ todos, remove, setTodos}) => {

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('')


  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveTodo = (id) => {
    let newTodo = [...todos].map(item => {
        if(item.id == id){
            item.title = value
        }
        return item
    })
    setTodos(newTodo)
    setEdit(null)
  }

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className="todo">
          <input type="checkbox" defaultChecked={item.completed}/>
          {edit === item.id ? (
            <div>
              <input
              value={value}
              onChange={(e) => setValue(e.target.value)}/>
              <button className="todo_change_btn" onClick={() => saveTodo(item.id)}>Сохранить</button>
            </div>
          ) : (
            <span>{item.title}</span>
          )}
          <button onClick={() => editTodo(item.id, item.title)} className="todo_change_btn">Редактировать</button>
          <button onClick={() => remove(item.id)} className="todo_change_btn">Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;



