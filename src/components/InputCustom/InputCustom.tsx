import { useId } from "react";
import { InputCustomContainer, Input, Label, Error } from "./styles/styles";

interface IInputCustomProps {
  type?: string;
  min?: number;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  error?: string;
}

const defaultProps = {
  type: undefined,
  min: undefined,
  value: undefined,
  onChange: undefined,
  placeholder: null,
  error: undefined,
};

export default function InputCustom({
  type,
  min,
  value,
  onChange,
  placeholder,
  error,
}: IInputCustomProps) {
  const id = useId();

  return (
    <InputCustomContainer error={!!error && true}>
      <Label htmlFor={`input_${id}`}>{placeholder}</Label>
      <Input
        id={`input_${id}`}
        type={type}
        min={min}
        value={value}
        onChange={onChange}
      />
      {error ? <Error>{error}</Error> : null}
    </InputCustomContainer>
  );
}

InputCustom.defaultProps = defaultProps;
