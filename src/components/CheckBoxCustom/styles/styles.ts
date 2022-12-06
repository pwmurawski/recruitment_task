import styled from "styled-components";

export const CheckBoxCustomContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Input = styled.input<{ error?: boolean }>`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border: 3px solid ${({ error }) => (error ? "#ff0000" : "black")};

  &:not(:checked) {
    appearance: ${({ error }) => (error ? "none" : "")};
  }
`;

const base = {
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "165%",
  display: "flex",
  alignItems: "center",
};

export const Label = styled.label`
  ${base}
  font-style: normal;
  font-weight: 700;
  margin: 0 50px 0 20px;
  color: #000000;
`;

export const Error = styled.div`
  ${base}
  font-style: italic;
  font-weight: 300;
  text-align: right;
  color: #ff0000;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
