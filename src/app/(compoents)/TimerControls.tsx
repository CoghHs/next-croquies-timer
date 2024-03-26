import React from "react";
import Button from "./Button";
import ResetButton from "./ResetButton";
import SaveButton from "./SaveButton";

interface TimerControlsProps {
  running: boolean;
  onStartStop: () => void;
  onReset: () => void;
  onSave: () => void;
}

export default function TimerControls({
  running,
  onStartStop,
  onReset,
  onSave,
}: TimerControlsProps) {
  return (
    <div className="flex justify-center">
      <Button running={running} onClick={onStartStop} />
      <ResetButton onClick={onReset} />
      <SaveButton onClick={onSave} />
    </div>
  );
}
