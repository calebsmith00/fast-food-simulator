import FormContainer from "../components/Utility/Form/Container";
import Header from "../components/Utility/Header";
import useForm from "../hooks/useForm";
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
  const { handleInput, getInputValue, inputs } = useForm(defaultInputFields);

  return (
    <div>
      <Header text="Login" />
      <FormContainer
        handleInput={handleInput}
        getInputValue={getInputValue}
        inputs={inputs}
      />
    </div>
  );
}
