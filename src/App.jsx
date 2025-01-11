// Counter
import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="title">COUNTER</h1>
      <h1 className="count">{count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default App;
