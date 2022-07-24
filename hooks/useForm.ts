import { ChangeEvent, useEffect, useState } from "react";

export type InputFields<T> = {
  [key: string]: {
    [key: string]: T;
  };
};

// Custom hook used to help modularize forms. This hook will: accept a list of keys, each key being
// represented an HTML <input> element.
export default function useForm(defaultInputs: InputFields<any> = {}) {
  const [inputs, setInputs] = useState<InputFields<any>>(defaultInputs);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputs((prevInput: any) => ({
      ...prevInput,
      [name]: {
        ...prevInput[name],
        value,
      },
    }));
  };

  const clearInputs = (event: ChangeEvent<HTMLButtonElement>) => {
    setInputs(defaultInputs);
  };

  const getInputValue = (keyName: string) => {
    if (inputs[keyName]) {
      return inputs[keyName]["value"];
    }
  };

  return { inputs, handleInput, getInputValue, clearInputs };
}
