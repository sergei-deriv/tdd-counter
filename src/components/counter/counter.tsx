import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 data-testid={'title'}>Counter</h1>
      <h3 data-testid={'counter'}>{counter}</h3>
    </div>
  );
};

export default Counter;
