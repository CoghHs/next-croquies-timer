import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnProps {
  onClick: () => void;
  running: boolean;
  [key: string]: any;
}

export default function Button({ onClick, running, ...rest }: BtnProps) {
  return (
    <button
      className="bg-black text-white w-10 h-10 rounded-xl"
      onClick={onClick}
      {...rest}
    >
      <FontAwesomeIcon icon={running ? faStop : faPlay} />
    </button>
  );
}
