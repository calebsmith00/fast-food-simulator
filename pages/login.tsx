import { MouseEvent } from "react";
import FormContainer from "../components/Utility/Form/Container";
import Header from "../components/Utility/Header";
import { InputFields } from "../hooks/useForm";

const defaultInputFields: InputFields<string> = {
  username: {
    name: "username",
    type: "text",
    value: "",
  },
  password: {
    name: "password",
    type: "password",
    value: "",
  },
};

export default function Login() {
  const handleSubmit = (
    event: MouseEvent<HTMLButtonElement>,
    inputs: InputFields<string>
  ) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <div>
      <Header text="Login" />
      <FormContainer inputs={defaultInputFields} handleSubmit={handleSubmit} />
    </div>
  );
}
