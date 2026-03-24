
import { useState } from "react"


function App(){
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }
  return (
    <>
      <h1>Use State Understanding : </h1>
      <h3>
        interview: "useState is a React Hook used to manage state in functional
        components and trigger re-render when state changes."
      </h3>
      <div>
        <p>
          👉 useState() is a React Hook used to store and update data in a
          component.
        </p>
        <p>👉 It allows your UI to change dynamically.</p>
        <h4>Syntax: const [state, setState] = useState(initialValue);</h4>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3
          style={{
            color: "blue",
            backgroundColor: "violet",
          }}
        >
          Counter {count}{" "}
        </h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
          ~ Reset
        </button>
      </div>
    </>
  );

}

export default App