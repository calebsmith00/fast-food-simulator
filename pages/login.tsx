import { useEffect } from "react";
import FormContainer from "../components/Utility/Form/Container";
import Header from "../components/Utility/Header";
import useForm from "../hooks/useForm";

export default function Login() {
  const { handleInput, getInputValue, inputs } = useForm({
    username: "",
    password: "",
  });

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
