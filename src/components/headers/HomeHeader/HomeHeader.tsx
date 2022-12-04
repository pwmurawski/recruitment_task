import {
  Container,
  FirstNameAndLastName,
  RegisterFormLink,
} from "./styles/styles";

export default function HomeHeader() {
  return (
    <Container>
      <FirstNameAndLastName>Paweł Murawski</FirstNameAndLastName>
      <RegisterFormLink to="/register">
        formularz rejestracyjny
      </RegisterFormLink>
    </Container>
  );
}
