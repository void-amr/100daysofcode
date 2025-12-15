import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  function increment() {
    // Your code
    setCount(count + 1)
  }
  
  function decrement() {
    // Your code
    setCount(count - 1)
  }
  
  function reset() {
    // Your code
    setCount(0)
  }
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      {/* Add your buttons here */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
}

export default App;