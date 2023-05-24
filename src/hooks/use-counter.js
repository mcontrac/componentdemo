import { useEffect, useState } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increament = () => {
    setCount(count + 1);
  };

  return {
    count,
    increament,
  };
}

export default useCounter;
