/* eslint-disable no-unused-vars */
import { Rules } from "./RulesTypes";

export interface ValuesType {
  value: string;
  error?: string;
  rules: Rules;
}

export type FormInitType<T extends string> = Record<T, ValuesType>;

export type FormType<T> = Record<keyof T, ValuesType>;

export type FormRespValueType<T> = Record<keyof T, string>;

export type SubmitType<T> = (data: FormRespValueType<T>) => void;
