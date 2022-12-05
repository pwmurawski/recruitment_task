/* eslint-disable no-unused-vars */
export type KeysType =
  | "login"
  | "password"
  | "email"
  | "phoneNumber"
  | "acceptRegulations";

export type FormResponseType = Record<KeysType, string>;

export type SubmitType = (data: FormResponseType) => void;
