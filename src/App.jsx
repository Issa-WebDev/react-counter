// Counter
import React, { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(() => {
    return Number(localStorage.getItem("count")) || 0;
  });

  const decrement = () => setCount((c) => c - 1);
  const increment = () => setCount((c) => c + 1);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1 className="title">COUNTER</h1>
      <h1 className="count">{count}</h1>

      <button onClick={decrement}>➖</button>
      <button onClick={increment}>➕</button>
    </div>
  );
};

export default App;
