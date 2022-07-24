import Button from "../Button/Button";

export default function FormButtonGroup(props: any) {
  return (
    <div>
      <Button text="Submit" onClick={props.handleSubmit} />
    </div>
  );
}
