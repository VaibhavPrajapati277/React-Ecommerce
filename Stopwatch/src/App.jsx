import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0); // in ms

  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsed;

      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 100); // update UI every 100ms (smooth but efficient)
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = () => {

    const totalSeconds = Math.floor(elapsed / 1000);
    console.log(elapsed)
    const hr = Math.floor(totalSeconds / 3600);
    const min = Math.floor((totalSeconds % 3600) / 60);
    const sec = totalSeconds % 60;
    const milsec = Math.floor(elapsed % 100)
    return `${hr.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}:${milsec.toString().padStart(2,"0")}`;

  };

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setElapsed(0);
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>

      <div className="timeformate">{formatTime()}</div>

      <div className="buttons">
        <button className="startbtn" onClick={start}>Start</button>
        <button className="stopbtn" onClick={stop}>Stop</button>
        <button className="resetbtn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;