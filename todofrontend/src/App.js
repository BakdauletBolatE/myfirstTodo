import {React} from 'react';
import TodoList from './components/todo/todoList';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
      <TodoList/>
      </div> 
    </div>
  );
}

export default App;
