import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
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
  const filtered = ((item, idx) => item.title.toLowerCase().includes(inputVal.toLowerCase()))

  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}
        placeholder='Search todo....' style={inputStyle} />
      {!loading ? data.todos.filter(filtered).map((item, idx) => {
        return (
          <div className='todo' key={idx} onClick={() => {
            data.todos.filter((todo) => todo !== item)
          }}>
            <label style={{ fontSize: 22, fontWeight: 400 }}>{item.title}</label>
          </div>
        )
      })
        :
        <h1>loading.....</h1>}
    </div>
  );
}

export default App;

const inputStyle = {
  borderRadius: 10, border: 'none', outline: 'none', fontSize: 18, textAlign: 'center', padding: 10,
  fontWeight: 400, height: 40, backgroundColor: 'rgb(248, 248, 248)', width: 700, margin: '20px 400px'
}