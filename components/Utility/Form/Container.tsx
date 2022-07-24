import { ChangeEventHandler } from "react";
import { InputFields } from "../../../hooks/useForm";
import FormInputGroups from "./InputGroups";

type FormContainerProps<> = {
  handleInput: ChangeEventHandler<HTMLInputElement>;
  getInputValue: Function;
  inputs: InputFields<any>;
};

export default function FormContainer(props: FormContainerProps) {
  return (
    <div className="text-center">
      <FormInputGroups
        inputs={props.inputs}
        handleInput={props.handleInput}
        getInputValue={props.getInputValue}
      />
    </div>
  );
}
