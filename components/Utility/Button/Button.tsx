import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import { btnTemplates, ButtonStyles } from "./Styles";

export type ButtonProps = {
  text: string;
  handleEvent: MouseEventHandler<HTMLButtonElement>;
  className?: btnTemplates;
};

export default function Button(props: ButtonProps) {
  const btnStyles = new ButtonStyles(props.className);

  const [styling, setStyling] = useState<string>(btnStyles.getStyleString());
  const {
    handleEvent = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
  } = props;

  return (
    <button
      className={`rounded-xl px-5 py-1 my-5 text-white font-semibold shadow-sm ${styling}`}
      onClick={handleEvent}
    >
      {props.text}
    </button>
  );
}
