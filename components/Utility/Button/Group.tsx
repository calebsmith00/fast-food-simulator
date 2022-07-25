import Button, { ButtonProps } from "./Button";

type ButtonGroupProps = {
  buttons: ButtonProps[];
};

export default function ButtonGroup({ buttons = [] }: ButtonGroupProps) {
  return (
    <div>
      {buttons.map((button: ButtonProps, index: number) => {
        return (
          <Button
            key={index}
            text={button.text}
            handleEvent={button.handleEvent}
            className={button.className}
          />
        );
      })}
    </div>
  );
}
