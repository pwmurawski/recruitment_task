import { ReactNode } from "react";
import { Container, Header, Main, Wrapper } from "./styles/styles";

interface ILayoutProps {
  header: ReactNode;
  main: ReactNode;
}

export default function Layout({ header, main }: ILayoutProps) {
  return (
    <Wrapper>
      <Container>
        <Header>{header}</Header>
        <Main>{main}</Main>
      </Container>
    </Wrapper>
  );
}
