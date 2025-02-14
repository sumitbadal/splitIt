import { createContext, useContext } from "react";

import { AppAction, AppContextType, IData } from "./DataStateModels";

export const initialNav = [];

export const defaultValue: IData = {
  loginDetails: { name: "", email: "", phone: "" },
};

export const dataReducer = (state: IData, action: AppAction) => {
  switch (action.type) {
    case "loginDetails":
      return {
        ...state,
        loginDetails: action.payload,
      };

    default:
      return state;
  }
};

export const DataState = createContext<AppContextType>({
  state: defaultValue,
  dispatch: () => null,
});

export const useDataStateContext = () => {
  return useContext(DataState);
};
