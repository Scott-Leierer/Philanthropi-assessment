import { InputType } from "patterns";

export interface ILoadedInput {
  name: string;
  type?: InputType;
  placeholder?: string;
  validation?: Record<string, unknown>;
}
