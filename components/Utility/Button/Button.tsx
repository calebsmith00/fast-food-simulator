import { useEffect, useState } from "react";
import { ButtonStyles } from "./Styles";

type ButtonClasses = "btn-primary" | "btn-fail";

type ButtonProps = {
  className?: ButtonClasses;
  text: string;
};

export default function Button(props: ButtonProps) {
  const [styling, setStyling] = useState<string>();
  const { className = "btn-primary" } = props;

  useEffect(() => {
    const styles = Object.values(ButtonStyles[className]).join(" ");
    setStyling(styles);
  }, [className]);

  return (
    <button
      className={`${styling} rounded-xl px-5 py-1 my-5 text-white font-semibold shadow-sm`}
    >
      {props.text}
    </button>
  );
}
