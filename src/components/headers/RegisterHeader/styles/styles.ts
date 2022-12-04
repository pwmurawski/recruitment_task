import styled from "styled-components";

const flexEnd = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
};

export const Container = styled.section`
  ${flexEnd};
  box-sizing: border-box;
  flex-direction: column;
  max-width: 740px;
  width: 100%;
  height: 160px;
  margin-bottom: 55px;
`;

export const Title = styled.h1`
  ${flexEnd};
  width: 100%;
  height: 52px;
  margin: 0 0 12px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 165%;
  text-align: right;
  letter-spacing: 0.15em;
  color: #000000;
`;

export const Bar = styled.div`
  width: 166.17px;
  height: 9.29px;
  background: #071594;
`;
