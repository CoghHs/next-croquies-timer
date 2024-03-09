import { fa2, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnProps {
  onClick: () => void;
}

export default function ResetButton({ onClick, ...rest }: BtnProps) {
  return (
    <button
      className="bg-black text-white w-10 h-10 rounded-xl"
      onClick={onClick}
      {...rest}
    >
      <FontAwesomeIcon
        icon={faArrowRotateRight}
        // className="transform transition-all hover:rotate-180 ease-in-out "
      />
    </button>
  );
}
