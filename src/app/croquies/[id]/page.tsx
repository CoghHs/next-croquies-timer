"use client";

import { getFetchPoseDetail } from "@/api/photo/api";
import Button from "@/app/(compoents)/Button";
import ResetButton from "@/app/(compoents)/ResetButton";
import SaveButton from "@/app/(compoents)/SaveButton";
import TimerControls from "@/app/(compoents)/TimerControls";
import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";

type RecordType = {
  id: number;
  lap: number;
};

// const [running, setRunning] = useState<boolean>(false);// 타이머 부분
// const [time, setTime] = useState<number>(0);
// const [laps, setLaps] = useState<RecordType[]>([]);
// const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
// const formatTime = (timeInMillis: number) => {
//   const minutes = Math.floor((timeInMillis % 3600000) / 60000);
//   const seconds = Math.floor((timeInMillis % 60000) / 1000);
//   const formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;
//   return formattedTime;
// };
// const startStopwatch = () => {
//   if (!running) {
//     intervalRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1000);
//     }, 1000);
//     setRunning(true);
//   } else {
//     clearInterval(intervalRef.current);
//     setRunning(false);
//   }
// };

// const resetStopwatch = () => {
//   clearInterval(intervalRef.current);
//   setTime(0);
//   setLaps([]);
//   setRunning(false);
// };

// const recordLap = () => {
//   const newLap = {
//     id: laps.length === 0 ? 1 : laps[laps.length - 1].id + 1,
//     lap: time,
//   };
//   setLaps((prevLaps) => [...prevLaps, newLap]);
// };

// const deleteLap = (id: number) => {
//   const filteredLaps = laps
//     .filter((record) => record.id !== id)
//     .map((record, index) => ({ ...record, id: index + 1 }));
//   setLaps(filteredLaps);
// };

export default function CroquiesDetail() {
  const path = usePathname();
  const pathArr = path.split("/");
  const photoId = useMemo(() => pathArr[pathArr.length - 1], []);

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["photo", photoId],
    queryFn: () => getFetchPoseDetail({ id: photoId }),
  });

  const onClick = () => {
    console.log(data);
  };

  return (
    <div>
      <main className="flex items-center justify-center ">
        <div className=" rounded-2xl shadow-2xl">
          {!isLoading && isFetched ? (
            <img
              src={data.urls?.regular}
              className="rounded-2xl w-[600px] h-[900px] object-cover"
            />
          ) : (
            <span>loading</span>
          )}
        </div>
        <button onClick={onClick}>다음</button>
      </main>
    </div>
  );
}
