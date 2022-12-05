import { useState } from "react";
import { validate } from "../helpers/validations";
import {
  FormRespValueType,
  FormType,
  SubmitType,
  ValuesType,
} from "../types/FormTypes";

const useForm = <InitState>(initForm: FormType<InitState>) => {
  const [formData, setFormData] = useState(initForm);

  const changeHandler = (value: string, fieldName: keyof InitState) => {
    const error = validate(formData[fieldName].rules, value);

    setFormData({
      ...formData,
      [fieldName]: {
        ...formData[fieldName],
        value,
        error,
      },
    });
  };

  const onSubmitHandler = (onSubmit: SubmitType<InitState>) => {
    const formResponseValue = Object.entries(
      formData as Record<string, ValuesType>
    ).reduce(
      (acc, [key, { value }]) => ({
        ...acc,
        [key]: value,
      }),
      {} as FormRespValueType<InitState>
    );

    onSubmit(formResponseValue);
  };

  return { formData, changeHandler, onSubmitHandler };
};

export default useForm;
