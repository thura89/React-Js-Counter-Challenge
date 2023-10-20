import React, { useState } from "react";

const App = () => {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const stepDecrease = () => {
    setStep(step - 1);
  };
  const stepIncrease = () => {
    setStep(step + 1);
  };
  const counterDecrease = () => {
    setCounter(Number(counter) - step);
  };
  const counterIncrease = () => {
    setCounter(Number(counter) + step);
  };

  const date = new Date();
  date.setDate(date.getDate() + counter);
  const resetHandling = () => {
    setCounter(0);
    setStep(1);
  };
  return (
    <div className="container">
      <div className="d-flex gap-1 justify-content-center mt-5">
        <input
          type="range"
          className="custom-range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button
          type="button"
          class="btn btn-info"
          onClick={() => stepDecrease()}
        >
          -
        </button> */}
        <h2>Step : {step}</h2>

        {/* <button
          type="button"
          class="btn btn-warning"
          onClick={() => stepIncrease()}
        >
          +
        </button> */}
      </div>
      <div className="d-flex gap-1 justify-content-center mt-5">
        <button
          type="button"
          class="btn btn-info"
          onClick={() => counterDecrease()}
        >
          -
        </button>
        {/* <h2>Counter : {counter}</h2> */}
        <input
          value={counter}
          type="text"
          placeholder="Counter"
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => counterIncrease()}
        >
          +
        </button>
      </div>
      <div className="text-center mt-5">
        <h1>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
          {date.toDateString()}
        </h1>
      </div>
      {counter !== 0 || step !== 1 ? (
        <div className="text-center mt-5">
          <button
            className="btn btn-danger d-inline"
            onClick={() => resetHandling()}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
