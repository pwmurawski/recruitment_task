import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 85px;
`;

export const FirstNameAndLastName = styled.p``;

export const RegisterFormLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 90px;
  text-align: center;
  background: #40483a;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;
