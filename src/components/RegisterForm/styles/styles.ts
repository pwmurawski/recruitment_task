import styled from "styled-components";

const sharedStyles = {
  fontFamily: "Lato",
  fontSize: "30px",
  fontStyle: "italic",
  fontWeight: 400,
};

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 755px;
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 224.3px;
  width: 100%;
  height: 54.88px;
  margin-top: 20px;
  background: #071594;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  ${sharedStyles};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const OffButton = styled(SubmitButton)`
  background-color: lightgray;
  box-shadow: none;
  border: 0;
  cursor: default;
`;
