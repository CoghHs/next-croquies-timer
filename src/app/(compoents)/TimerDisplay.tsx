// TimerDisplay.tsx

interface TimerDisplayProps {
  time: number;
}

export default function TimerDisplay({ time }: TimerDisplayProps) {
  const formatTime = (timeInMillis: number) => {
    const minutes = Math.floor((timeInMillis % 3600000) / 60000);
    const seconds = Math.floor((timeInMillis % 60000) / 1000);
    const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    return formattedTime;
  };

  return <h1>{formatTime(time)}</h1>;
}
