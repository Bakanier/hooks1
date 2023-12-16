import React, {useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log(`Значение счетчика изменено: ${count}`)
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
