import styled, { CSSObject } from "styled-components";

const samePosition: CSSObject = {
  position: "absolute",
  left: "18%",
  right: "15.25%",
};

export const Container = styled.section`
  position: relative;
  max-width: 800px;
  width: 100%;
  height: 740px;
  background-color: rgba(54, 44, 44, 0.15);
  /* backdrop-filter: blur(280px); */
  box-shadow: 8px 2px 2px 0 rgba(54, 44, 44, 0.5);
  border-radius: 500px 60px 300px 100px;
`;

export const PersonImg = styled.div`
  ${samePosition};
  top: 16.98%;
  bottom: 36.56%;

  background-image: url(https://i.picsum.photos/id/424/534/383.jpg?hmac=EZEBthy9n5F4RPcuffeub-Nuiif0dDclbvPT8XVUvrA);
  border-radius: 200px 20px 100px 50px;
`;

export const PersonInfo = styled.div`
  ${samePosition};
  top: 66.64%;
  display: flex;
  flex-direction: column;
  padding: 0 90px;

  @media (max-width: 650px) {
    padding: 0 90px 0 0;
  }
`;

export const Name = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 61px;
  margin: 0;
  text-align: center;
  color: #000000;

  @media (max-width: 435px) {
    font-size: 35px;
    line-height: 40px;
  }
`;

export const Age = styled.div`
  font-family: "Inter";
  font-style: italic;
  font-weight: 100;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export const EyeColor = styled(Age)``;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
