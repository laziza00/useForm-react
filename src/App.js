import { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './componenets/Form';
import { useFetch } from './componenets/useFetch';

function App() {

  const [count, setCount] = useState(localStorage.getItem('count') ? +localStorage.getItem('count') : 1)

  const {data, loading} = useFetch (`https://jsonplaceholder.typicode.com/todos/${count}`)


  useEffect(() => {
   
  }, [count])

  const countHandler = () => {
    setCount((prev, next) => {
      localStorage.setItem('count', count + 1)
      return count + 1
    });
  }

  return (
    <div className="App">
      <h1>Hello Fetch {count}</h1>
    
      <button onClick={countHandler}>
          counter
      </button>

      <p>{!data ? "loading..." : data.title}</p>

      <Form />
    </div>
  );
}

export default App;