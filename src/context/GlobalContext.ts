/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { ActionType, IState } from "../types/GlobalReducerTypes";

interface IGlobalContext {
  state: IState;
  dispatch: React.Dispatch<ActionType>;
}

const GlobalContext = createContext<IGlobalContext>({
  state: {
    starWarsData: [],
  },
  dispatch: () => {},
});

export default GlobalContext;
