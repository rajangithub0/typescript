import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>cups orderded :{count}</p>
      <button onClick={() => setCount((c) => c + 1 )}>order One More</button>
    </div>
  );
}
