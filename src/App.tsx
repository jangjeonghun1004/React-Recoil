import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import './App.css'
import { selectorToDo } from './recoil/selectors/defaultSelectors';
import { useMemo } from 'react';
import ToDoList from './shared/ToDoList';
import Error from './shared/Error';
import { keywordState } from './recoil/atoms/defaultAtoms';


function App() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const todos = useRecoilValueLoadable(selectorToDo);

  const todoList = useMemo(() => {
    if(todos.state === 'hasValue' && todos.contents) {
      return <ToDoList data={todos.contents.data} />
    } else if(todos.state === 'loading') {
      return <span className="loader"></span>
    } else {
      return <Error />
    }
  }, [todos]);

  const handleClick = () => {
    setKeyword('changed values of keyword.');
  };

  return (
    <>
      <button onClick={handleClick}>change keyword value</button>

      <h1>ToDo List</h1>
      <div>
        { todoList }
      </div>
    </>
  )
}

export default App
