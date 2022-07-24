import { ChangeEvent, useEffect, useState } from "react";

type FormProps = {
  [key: string]: string;
};

// Custom hook used to help modularize forms. This hook will: accept a list of keys, each key being
// represented an HTML <input> element.
export default function useForm(defaultInputs = {}) {
  const [inputs, setInputs] = useState<FormProps>(defaultInputs);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs((prevInput: FormProps) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const clearInputs = (event: ChangeEvent<HTMLButtonElement>) => {
    setInputs(defaultInputs);
  };

  const getInputValue = (keyName: string): string => {
    return inputs[keyName];
  };

  return { inputs, handleInput, getInputValue, clearInputs };
}
