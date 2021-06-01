import { ReactElement, useState } from "react";
import { classNames } from "../../src/libs/classNames";

interface ButtonProps {
  children: ReactElement;
}

export function Button({ children }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={classNames("px-4 py-2 rounded-xl", [
        isClicked ? "bg-green-500" : "bg-blue-500",
      ])}
      onClick={() => setIsClicked((props) => !props)}
    >
      {children}
    </button>
  );
}
