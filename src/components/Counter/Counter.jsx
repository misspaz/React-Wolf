import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
         <button onClick={() => setCounter(counter + 1)}>+</button>
          {counter}
          <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>

  )
}