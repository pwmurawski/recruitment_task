type AvailableRulesFieldNamesString =
  | "required"
  | "email"
  | "requiredAcceptRegulations";
type AvailableRulesFieldNamesObject = "min" | "phoneNumber";

export interface IRule {
  rule: AvailableRulesFieldNamesObject;
  length: number;
}

export type Rules = (AvailableRulesFieldNamesString | IRule)[];
