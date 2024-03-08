"use client";

import { useRef, useState } from "react";
import Button from "./Button";

type RecordType = {
  id: number;
  lap: number;
};

export default function Timer() {
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<RecordType[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const startStopwatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      setRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const recordLap = () => {
    const newLap = {
      id: laps.length === 0 ? 1 : laps[laps.length - 1].id + 1,
      lap: time,
    };
    setLaps((prevLaps) => [...prevLaps, newLap]);
  };

  const deleteLap = (id: number) => {
    const filteredLaps = laps
      .filter((record) => record.id !== id)
      .map((record, index) => ({ ...record, id: index + 1 }));
    setLaps(filteredLaps);
  };

  const formatTime = (timeInMillis: number) => {
    const hours = Math.floor(timeInMillis / 3600000);
    const minutes = Math.floor((timeInMillis % 3600000) / 60000);
    const seconds = Math.floor((timeInMillis % 60000) / 1000);
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    return formattedTime;
  };

  return (
    <div>
      <div>
        <h1>{formatTime(time)}</h1>
      </div>
      <div>
        <Button text={running ? "STOP" : "RUNNING"} onClick={startStopwatch} />
        {/* <button onClick={startStopwatch}>{running ? "STOP" : "RUNNING"}</button> */}
        <button onClick={resetStopwatch}>RESET</button>
        <button onClick={recordLap}>LAP</button>
      </div>
      <div>
        <ul>
          {laps.map((lap) => (
            <li key={lap.id}>
              <span>{`Lap ${lap.id}: ${formatTime(lap.lap)}`}</span>
              <button onClick={() => deleteLap(lap.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
