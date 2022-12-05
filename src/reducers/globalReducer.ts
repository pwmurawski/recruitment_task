import { ActionType, IState } from "../types/GlobalReducerTypes";

export const globalReducer = (state: IState, action: ActionType) => {
  switch (action.type) {
    case "addStarWarsData":
      return {
        starWarsData: [...state.starWarsData, action.starWarsData],
      };

    case "setStarWarsData":
      return { starWarsData: action.starWarsData };

    default:
      throw new Error("There is no such action");
  }
};

export const initialState: IState = {
  starWarsData: [],
};
