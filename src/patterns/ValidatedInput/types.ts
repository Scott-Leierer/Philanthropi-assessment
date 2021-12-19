export const inputAnimationTime = 200;

export enum InputType {
  String = "string",
  State = "state",
}

export interface IInputStyles {
  disabled?: boolean;
  isLoading?: boolean;
}

export interface IInput extends IInputStyles {
  className?: string;
  type?: InputType;
  register: (name: string, rules: Record<string, unknown>) => void;
  name: string;
  errors: Record<string, unknown>;
  placeholder?: string;
  validation?: Record<string, unknown>;
}
