import React, { useState } from "react";

const Timer : React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0)

  return (
    <div>
      <h1> 타이머 : {seconds}초 </h1>
      <button onClick={() => {
        setInterval(() => {
          setSeconds(prev => prev + 1);
        }, 1000)
      }}>시작</button>
    </div>
  )
}

export default Timer;