import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import { ButtonStyles } from "./Styles";

type ButtonClasses = "btn-primary" | "btn-fail";

type ButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: ButtonClasses;
};

export default function Button(props: ButtonProps) {
  const [styling, setStyling] = useState<string>();
  const {
    className = "btn-primary",
    onClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
  } = props;

  useEffect(() => {
    const styles = Object.values(ButtonStyles[className]).join(" ");
    setStyling(styles);
  }, [className]);

  return (
    <button
      className={`rounded-xl px-5 py-1 my-5 text-white font-semibold shadow-sm ${styling}`}
      onClick={onClick}
    >
      {props.text}
    </button>
  );
}
