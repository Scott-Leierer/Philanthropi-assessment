// used for making the props of this component to bool
import { FC, MouseEvent } from "react";
import classNames from "classnames";

import { ButtonStyles, SpinnerStyles } from "./styles.css";
import { IButton, ButtonStyle, ButtonType } from "./types";

const ButtonSpinner: FC = () => (
  <SpinnerStyles>
    <div className="loader"></div>
  </SpinnerStyles>
);

export const Button: FC<IButton> = ({
  buttonStyle = ButtonStyle.Default,
  buttonType = ButtonType.Button,
  className,
  action,
  disabled = false,
  isLoading = false,
  children,
}) => {
  const handleAction = (e: MouseEvent) => {
    if (!disabled && !isLoading && typeof action === "function") {
      action(e);
    }
  };
  return (
    <ButtonStyles
      buttonStyle={buttonStyle}
      type={buttonType}
      className={classNames(className, { "is-loading": isLoading })}
      onClick={handleAction}
      disabled={disabled}
    >
      {children}
      {isLoading && <ButtonSpinner />}
    </ButtonStyles>
  );
};
