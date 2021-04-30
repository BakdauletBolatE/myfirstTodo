import {React,useState} from 'react';
import TodoItem from './todoItem';
import TodoService from './../../vendor/TodoItemService';

export default function TodoList() {
    let todo = new TodoService()
    const [todos, setTodos] = useState([]);
    let Array;
    todo.getAllTodos()
    .then(res => Array = res)

    console.log(Array);
    let todoItem = todos.map(todo => {
        <TodoItem todo={todo} />
    })
    console.log(todos)
    return (
        <div className="todo-list">
            {todoItem}
        </div>
        );
}
  