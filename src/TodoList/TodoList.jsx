import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({todos, remove}) => {
    return(
        <ul>
            {todos.map(item => <TodoItem remove={remove} key={item.id}{...item}/>)}
        </ul>
    )
}

export default TodoList;