import isErrorForm from "../../helpers/isErrorForm";
import useForm from "../../hooks/useForm";
import { FormInitType } from "../../types/FormTypes";
import { KeysType, SubmitType } from "../../types/RegisterFormTypes";
import CheckBoxCustom from "../CheckBoxCustom/CheckBoxCustom";
import InputCustom from "../InputCustom/InputCustom";
import { FormContainer, OffButton, SubmitButton } from "./styles/styles";

const initFormValue: FormInitType<KeysType> = {
  login: {
    value: "",
    rules: ["required"],
  },
  password: {
    value: "",
    rules: ["required"],
  },
  email: {
    value: "",
    rules: ["required", "email"],
  },
  phoneNumber: {
    value: "",
    rules: ["required", { rule: "phoneNumber", length: 9 }],
  },
  acceptRegulations: {
    value: "",
    rules: ["requiredAcceptRegulations"],
  },
};

interface IRegisterFormProps {
  onSubmit: SubmitType;
}

export default function RegisterForm({ onSubmit }: IRegisterFormProps) {
  const { formData, changeHandler, onSubmitHandler } = useForm(initFormValue);

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(onSubmit);
      }}
    >
      <InputCustom
        type="text"
        placeholder="Login:"
        value={formData.login.value}
        onChange={(e) => changeHandler(e.target.value, "login")}
        error={formData.login.error}
      />
      <InputCustom
        type="password"
        placeholder="Hasło:"
        value={formData.password.value}
        onChange={(e) => changeHandler(e.target.value, "password")}
        error={formData.password.error}
      />
      <InputCustom
        type="text"
        placeholder="E-mail:"
        value={formData.email.value}
        onChange={(e) => changeHandler(e.target.value, "email")}
        error={formData.email.error}
      />
      <InputCustom
        type="number"
        min={0}
        placeholder="Numer telefonu:"
        value={formData.phoneNumber.value}
        onChange={(e) => changeHandler(e.target.value, "phoneNumber")}
        error={formData.phoneNumber.error}
      />
      <CheckBoxCustom
        onChange={(e) =>
          changeHandler(e.target.checked ? "true" : "", "acceptRegulations")
        }
        placeholder="Akceptuję Regulamin"
        error={formData.acceptRegulations.error}
      />
      {!isErrorForm(formData) ? (
        <SubmitButton type="submit">zapisz</SubmitButton>
      ) : (
        <OffButton type="button">zapisz</OffButton>
      )}
    </FormContainer>
  );
}
