
import './App.css';
import { Fragment } from 'react';
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
function App() {
  return (
      <Fragment>
        <h1 className='todo-app-title'>Todo App</h1>
      <section className='App'>
        <TodoListContainer />
      </section>
      </Fragment>
  );
}

export default App;
