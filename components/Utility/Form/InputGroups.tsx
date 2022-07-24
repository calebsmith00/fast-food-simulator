import FormInput from "./Input";

export default function FormInputGroups(props: any) {
  return (
    <>
      {Object.values(props.inputs).map(
        (input: typeof props.inputs, index: number) => {
          return (
            <FormInput
              {...input}
              key={index}
              handleInput={props.handleInput}
              getInputValue={props.getInputValue}
              value={props.getInputValue(input.name)}
            />
          );
        }
      )}
    </>
  );
}
