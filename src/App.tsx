import { useRecoilValueLoadable } from 'recoil'
import './App.css'
import { selectorToDo } from './recoil/selectors/defaultSelectors';
import { useMemo } from 'react';
import ToDoList from './shared/ToDoList';
import Error from './shared/Error';

function App() {
  const todos = useRecoilValueLoadable(selectorToDo);
  const todoList = useMemo(() => {
    if(todos.state === 'hasValue' && todos.contents) {
      return <ToDoList data={todos.contents?.data} />
    } else if(todos.state === 'loading') {
      return <span className="loader"></span>
    } else {
      return <Error />
    }
  }, [todos]);

  return (
    <>
      <h1>ToDo List</h1>
      <div>
        { todoList }
      </div>
    </>
  )
}

export default App
