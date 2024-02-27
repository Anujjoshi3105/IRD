import React, { useEffect, useState } from "react";

const Count = ({ data }) => {
  const { label, number, duration: propDuration } = data;
  const duration = propDuration || 1;
  const [count, setCount] = useState("0");

  useEffect(() => {
    const end = parseInt(number.substring(0, 3));
    if (end === 0) return;

    const totalMilSecDur = duration * 1000;
    const incrementTime = totalMilSecDur / end;

    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(`${start}${number.substring(3)}`);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number, duration]);

  return (
    <div class="flex flex-col items-center justify-center py-10 rounded-xl shadow-xl transition duration-500 hover:scale-105">
      <div class="text-center font-bold text-xl">
        <h3 class="">{label}</h3>
      </div>
      <div class="text-center">
        <h3>{count}</h3>
      </div>
    </div>
  );
};

export default Count;
