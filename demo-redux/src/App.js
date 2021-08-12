import { useState, useEffect } from 'react';
import './App.css';
const styles = {
  h1: {
    margin: 0,
    textDecoration: 'underline',
    fontWeight: '400'
  },
  buttons: {
    width: '20%',
    fontSize: 20,
    display: 'inline-flex',
    justifyContent: 'space-around'
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.3
  }
}

function App() {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(0);
  const increment = () => {
    setValue( prevCount => ( prevCount + 1 ) );
  }
  const decrement = () => {
    setValue( prevCount => ( prevCount - 1 ) );
  }
  useEffect(() =>console.log(value), [value]);
  return (
    <div className="App">
      <header className="App-header">
       <h1 style={styles.h}>Counter</h1>
       <h2>{value}</h2>
       <div>
         <div style={styles.buttons}>
           <button onClick={decrement}>-</button>
           <button onClick={increment}>+</button>
         </div><br />
         <div style={{...styles.buttons, ...styles.disabled}}>
           <button onClick={() => null} >add</button>
           <input type="text" onChange={ e => setInput( e.target.value ) } value={input} /> &nbsp;
           <button onClick={() => null} >substract</button>
         </div>
       </div>
      </header>
    </div>
  );
}

export default App;
