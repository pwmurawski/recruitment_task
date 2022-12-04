/* eslint-disable camelcase */
import getAgeByBirthYearBBY from "../../helpers/getAgeByBirthYearBBY";
import { IPeople } from "../../types/PeopleTypes";
import ConfirmedSvg from "../Svg/ConfirmedSvg";
import HumanSvg from "../Svg/HumanSvg";
import {
  PersonInfo,
  Name,
  Container,
  PersonImg,
  Icon,
  Age,
  EyeColor,
} from "./styles/styles";

interface IPersonProfileProps {
  personData?: IPeople;
}

const defaultProps = {
  personData: undefined,
};

export default function PersonProfile({ personData }: IPersonProfileProps) {
  if (!personData) return null;
  return (
    <Container>
      <PersonImg />
      <PersonInfo>
        <Name>{personData.name}</Name>
        <Age>age: {getAgeByBirthYearBBY(personData.birth_year)}</Age>
        <EyeColor>eye color: {personData.eye_color}</EyeColor>
        <Icon>
          <HumanSvg />
          {personData.speciesName?.toLowerCase() === "human" ? (
            <ConfirmedSvg />
          ) : null}
        </Icon>
      </PersonInfo>
    </Container>
  );
}

PersonProfile.defaultProps = defaultProps;
