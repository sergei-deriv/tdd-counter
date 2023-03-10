import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClickHandler = (value: number) => {
    setCounter(value);
  };

  return (
    <div>
      <h1 data-testid={'title'}>Counter</h1>
      <h3 data-testid={'counter'}>{counter}</h3>
      <div>
        <button onClick={() => onClickHandler(counter + 1)}>+</button>
        <button onClick={() => onClickHandler(counter - 1)}>-</button>
        <button onClick={() => onClickHandler(0)}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
