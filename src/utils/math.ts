import { evaluate } from 'mathjs';

export const evaluateValue = (value: string) => {
  let evaluatedValue = value;
  if (value.startsWith('=')) {
    try {
      evaluatedValue = evaluate(value.slice(1));
    } catch {
      evaluatedValue = value;
    }
  }
  return evaluatedValue;
};
