import styled from "styled-components";

const inputStyles = {
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "165%",
};

export const InputCustomContainer = styled.div<{ error?: boolean }>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin: 10px 0;
  border-bottom: 1.55px solid ${({ error }) => (error ? "red" : "black")};
  background: transparent;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const Input = styled.input`
  ${inputStyles};
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  font-size: 16px;
  color: black;
`;

export const Error = styled.div`
  ${inputStyles};
  position: absolute;
  bottom: -35px;
  right: 0;
  font-style: italic;
  font-weight: 300;
  color: #ff0000;
`;
