import { ChangeEventHandler, useEffect } from "react";
import FormInput from "./Input";

type FormContainerProps = {
  handleInput: ChangeEventHandler<HTMLInputElement>;
  getInputValue: Function;
  inputs: {
    [key: string]: string;
  };
};

export default function FormContainer(props: FormContainerProps) {
  useEffect(() => {
    console.log(props.inputs);
  }, [props]);

  return (
    <div className="text-center">
      {Object.keys(props.inputs).map((inputTitle: string, index: number) => {
        return (
          <FormInput
            key={index}
            handleInput={props.handleInput}
            getInputValue={props.getInputValue}
            name={inputTitle}
            type="text"
            value={props.getInputValue(inputTitle)}
          />
        );
      })}
    </div>
  );
}
