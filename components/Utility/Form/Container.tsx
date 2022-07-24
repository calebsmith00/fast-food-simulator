import { MouseEvent, MouseEventHandler } from "react";
import useForm, { InputFields } from "../../../hooks/useForm";
import FormButtonGroup from "./ButtonGroup";
import FormInputGroups from "./InputGroups";

type FormContainerProps = {
  inputs: InputFields<any>;
  handleSubmit: Function;
};

export default function FormContainer(props: FormContainerProps) {
  const { handleInput, getInputValue, inputs } = useForm(props.inputs);

  // Middleman submit function -- utilizes this to modularize this form component. All logic will be managed
  // within the form component, but sending the data can vary per page
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    return props.handleSubmit(event, inputs);
  };

  return (
    <div className="text-center">
      <FormInputGroups
        inputs={inputs}
        handleInput={handleInput}
        getInputValue={getInputValue}
      />

      <FormButtonGroup inputs={inputs} handleSubmit={handleSubmit} />
    </div>
  );
}
