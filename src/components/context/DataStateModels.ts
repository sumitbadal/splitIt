import { Dispatch } from "react";

export type IUserLoginProps = {
  name: string;
  email: string;
  phone: string;
};

export interface ChildrenProps {
  category: string;
  price: string | number;
  name: string;
}

export interface IData {
  loginDetails: IUserLoginProps;
}

export type IType = { type: "category" | "items"; status: boolean };
export type AppAction = {
  type: "loginDetails";
  payload: IUserLoginProps;
};

export interface AppContextType {
  state: IData;
  dispatch: Dispatch<AppAction>;
}
