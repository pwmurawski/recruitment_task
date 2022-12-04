import styled, { CSSObject } from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #d9d9d9;
`;

const flexColumnCenterStyles: CSSObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

export const Container = styled.section`
  ${flexColumnCenterStyles};
  box-sizing: border-box;
  max-width: 1130px;
  padding: 10px 20px 50px;
  background: #ffffff;
`;

export const Header = styled.header`
  position: relative;
  ${flexColumnCenterStyles};
`;

export const Main = styled.main`
  position: relative;
  ${flexColumnCenterStyles};
`;
