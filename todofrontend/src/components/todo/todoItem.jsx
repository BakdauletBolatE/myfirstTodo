import {React} from 'react';


export default function TodoItem({todo}) {
    return (
    <div>
        <div className="todo-item">
            <p>{todo.task}</p>
            <button>{todo.isDone}</button>
        </div>
    </div>
    );
  }
  