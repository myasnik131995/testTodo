import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { MySelect } from "../mySelect/MySelect";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [edit, setEdit] = useState(null);
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = []
  for (let i = 0; i <totalPages; i++){
    pagesArray.push(i+1);
  }

  const sortedTodos = useMemo(() => {
    if(selectedSort) {
      return [...todos].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    } 
    return todos;
  }, [selectedSort, todos])

  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))

  }, [searchQuery, sortedTodos])
  
  useEffect(() => {
    fetchTodos()
  }, [])

  const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount/ limit)
  } 
  
  const changePage = (page) => {
    setPage(page)
    fetchTodos(limit, page)
  }

  async function fetchTodos(limit = 10, page = 1) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos", 
    {
      params: {
      _limit: limit,
      _page: page
    }
  });
    setTodos(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  }

  const addTodoKey = (event) => {
    if (event.key === "Enter" && todoName.length > 0) {
      setTodos([
        ...todos,
        { id: Date.now(), title: todoName, completed: false, isEdit: false },
      ]);
      setTodoName("");
    }
  };

  const addTodoBtn = () => {
    if(todoName.length > 0) {
      setTodos([...todos, { id: Date.now(), title: todoName, completed: false }]);
      setTodoName("");}
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  
  const editTodo = (id) => {
    setEdit(id)
  }

  const sortTodos = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="todo_wrapper">

      <h1>Todo test</h1>
      <div>
        <input
          type="text"
          placeholder="Введите задачу"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          onKeyPress={addTodoKey}
        />
      </div>

      <button className="todo_btn" onClick={addTodoBtn}>
        ДОБАВИТЬ ЗАДАЧУ
      </button>

      <div>
        <MySelect 
        value={selectedSort}
        onChange={sortTodos}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По задаче'}
        ]}/>
      </div>

        <input 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Поиск..." 
        style={{marginBottom: 20, marginTop: 20}}
        />

      <div className="todo_list_container">
        <TodoList 
        todos={sortedAndSearchedTodos} 
        remove={removeTodo} 
        editTodo={editTodo} 
        setTodos={setTodos}/>
      </div>
      {pagesArray.map(p => 
      <button 
      key={p} 
      className={page === p ? 'btn_pages btn_pages__current' : 'btn_pages'}
      onClick={() => changePage(p)}>
        {p}
        </button>
      )}
    </div>
  );
};

export default Todo;


