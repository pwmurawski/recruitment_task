import { IStarWars } from "./StarWarsTypes";

interface IAddStarWarsData {
  type: "addStarWarsData";
  starWarsData: IStarWars;
}

interface ISetStarWarsData {
  type: "setStarWarsData";
  starWarsData: IStarWars[];
}

export interface IState {
  starWarsData: IStarWars[];
}

export type ActionType = IAddStarWarsData | ISetStarWarsData;
