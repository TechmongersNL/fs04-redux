import { deposit, reset, withdraw } from "./store/balance/slice";
import { useDispatch, useSelector } from "react-redux";

import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(35));
        }}
      >
        Deposit 10$
      </button>

      <button
        onClick={() => {
          dispatch(withdraw(35));
        }}
      >
        Witdraw 10$
      </button>

      <button
        onClick={() => {
          dispatch(reset(35));
        }}
      >
        Reset!
      </button>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(deposit(Number(amount)));
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            dispatch(withdraw(Number(amount)));
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default App;
