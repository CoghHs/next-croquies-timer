interface BtnProps {
  text: string;
  onClick: () => void;
  [key: string]: any;
}

export default function Button({ onClick, text, ...rest }: BtnProps) {
  return (
    <button className="bg-black text-white h-10" onClick={onClick} {...rest}>
      {text}
    </button>
  );
}
