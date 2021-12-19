export enum ButtonStyle {
  Default = 1,
  Outline = 2,
  Link = 3,
}

export enum ButtonType {
  Button = "button",
  Submit = "submit",
}

export const buttonAnimationTime = 75;

export interface IButtonStyles {
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  isLoading?: boolean;
}

export interface IButton extends IButtonStyles {
  buttonType?: ButtonType;
  className?: string;
  action?: (e: React.MouseEvent) => void;
}
