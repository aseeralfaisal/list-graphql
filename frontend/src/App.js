import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('')
  const GET_TODOS = gql`
  query Query {
    todos {
      title
    }
  }`;
  const { loading, error, data } = useQuery(GET_TODOS)
  const [todoList, setTodoList] = useState(data.todos)

  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}
        placeholder='Search todo....' style={inputStyle} />
      {!loading ?
        todoList.filter((item, idx) => item.title.toLowerCase().includes(inputVal.toLowerCase())).map((item, idx) => {
          return (
            <div className='todo' key={idx} onClick={() => {
              setTodoList(todoList.filter((todo) => todo !== item))
            }}>
              <label style={{ fontSize: 22, fontWeight: 400 }}>{item.title}</label>
            </div>
          )
        })
        :
        <h1>{error}</h1>
      }
    </div>
  );
}

export default App;

const inputStyle = {
  margin: 20, padding: 10, borderRadius: 10, border: 'none', outline: 'none', fontSize: 18, textAlign: 'center', padding: 10,
  fontWeight: 400, height: 40, width: 500, backgroundColor: 'rgb(248, 248, 248)', width: 700, margin: '20px 400px'
}