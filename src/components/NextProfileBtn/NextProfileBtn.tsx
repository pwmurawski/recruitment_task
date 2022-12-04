import { Container } from "./styles/styles";

interface INextProfileBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultProps = {
  onClick: undefined,
};

export default function NextProfileBtn({ onClick }: INextProfileBtnProps) {
  return <Container onClick={onClick}>next profiles</Container>;
}

NextProfileBtn.defaultProps = defaultProps;
