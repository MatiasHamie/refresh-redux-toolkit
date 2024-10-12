import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter}</p>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(2))}>IncrementBy 2</button>
      </div>
    </>
  );
}

export default App;
