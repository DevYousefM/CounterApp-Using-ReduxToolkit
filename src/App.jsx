import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
  toggleCounter,
} from "./Store/counterSlice";
import { useRef } from "react";
function App() {
  const state = useSelector((state) => state.counterApp);

  // const count = useSelector((state) => state.counterApp.value);
  // const status = useSelector((state) => state.counterApp.status);

  const dispatch = useDispatch();
  const amount = useRef(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(toggleCounter());
        }}
      >
        Hide/Show Counter
      </button>
      {state.status && (
        <>
          <p>{state.value}</p>
          <div style={{ display: "flex" }}>
            <button
              onClick={() => {
                dispatch(increament());
              }}
            >
              Increase
            </button>
            <button
              onClick={() => {
                dispatch(decreament());
              }}
            >
              Decrease
            </button>
          </div>
          <input type="number" ref={amount} />
          <button
            onClick={() => {
              dispatch(increamentByAmount(amount.current.value));
              amount.current.value = "";
            }}
          >
            Add Value
          </button>
        </>
      )}
    </div>
  );
}

export default App;
