import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div>
      <h1>My To-Do App</h1>
      <ToDoList />
    </div>
  );
}

export default App;