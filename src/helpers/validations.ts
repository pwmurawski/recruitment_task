/* eslint-disable import/prefer-default-export */
import { IRule, Rules } from "../types/RulesTypes";

function validateEmail(text: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(text);
}

const availableRules = {
  required(value: string) {
    return value ? "" : "Pole wymagane";
  },
  requiredAcceptRegulations(value: string) {
    return value ? "" : "Wymagana akceptacja regulaminu";
  },
  min(value: string, rule: IRule) {
    return value.length >= rule.length ? "" : `Min. znaków: ${rule.length}`;
  },
  phoneNumber(value: string, rule: IRule) {
    return value.length === rule.length ? "" : `Nieprawidłowy numer telefonu`;
  },
  email(value: string) {
    return validateEmail(value) ? "" : "Nieprawidłowy format adresu e-mail";
  },
};

export function validate(rules: Rules, value: string) {
  for (const rule of rules) {
    let errorMessage;
    if (rule instanceof Object) {
      errorMessage = availableRules[rule.rule](value, rule);
    } else {
      errorMessage = availableRules[rule](value);
    }
    if (errorMessage) {
      return errorMessage;
    }
  }
  return "";
}
