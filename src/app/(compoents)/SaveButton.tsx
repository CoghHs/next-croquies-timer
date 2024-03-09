import { faBook, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BtnProps {
  onClick: () => void;
}

export default function SaveButton({ onClick, ...rest }: BtnProps) {
  return (
    <button
      className="bg-black text-white w-10 h-10 rounded-xl"
      onClick={onClick}
      {...rest}
    >
      <FontAwesomeIcon icon={faBookmark} />
    </button>
  );
}
