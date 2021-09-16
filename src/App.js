import {useEffect, useState} from 'react';
import {Todo} from './Todo';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('list', list);
  }, [list])

  return <Todo todos={list} onChange={setList}/>
}

export default App;
