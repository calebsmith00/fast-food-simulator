import { ChangeEventHandler, useEffect, useState } from "react";

type FormInputProps = {
  handleInput: ChangeEventHandler<HTMLInputElement>;
  getInputValue: Function;
  name: string;
  type: string;
  value: string;
};

export default function FormInput(props: FormInputProps) {
  const [formattedLabelName, setFormattedLabelName] = useState<string>("");

  useEffect(() => {
    const inputName = props.name;

    setFormattedLabelName(inputName[0].toUpperCase() + inputName.substring(1));
  }, [props.name]);

  return (
    <div className="py-2">
      <label htmlFor={props.name} className="mx-3">
        {formattedLabelName}
      </label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.handleInput}
        value={props.getInputValue(props.name)}
      />
    </div>
  );
}
