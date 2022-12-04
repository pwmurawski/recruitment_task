import { useId } from "react";
import { CheckBoxCustomContainer, Input, Label, Error } from "./styles/styles";

interface ICheckBoxCustomProps {
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  error?: string;
}

const defaultProps = {
  value: undefined,
  onChange: undefined,
  placeholder: null,
  error: undefined,
};

export default function CheckBoxCustom({
  value,
  onChange,
  placeholder,
  error,
}: ICheckBoxCustomProps) {
  const id = useId();

  return (
    <CheckBoxCustomContainer>
      <Input
        id={`input_${id}`}
        type="checkbox"
        value={value}
        onChange={onChange}
        error={!!error && true}
      />
      <Label htmlFor={`input_${id}`}>{placeholder}</Label>
      {error ? <Error>{error}</Error> : null}
    </CheckBoxCustomContainer>
  );
}

CheckBoxCustom.defaultProps = defaultProps;
