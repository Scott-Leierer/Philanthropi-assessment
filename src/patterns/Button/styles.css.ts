import styled, { css } from "styled-components/macro";
import { vars } from "styles/vars.css";

import { ButtonStyle, IButtonStyles, buttonAnimationTime } from "./types";

export const SpinnerStyles = styled.div`
  position: absolute;
  right: 3rem;
  .loader {
    border: 16px solid ${vars.color["gray-1"]}; /* Light grey */
    border-top: 16px solid ${vars.color["blue-1"]}; /* Blue */
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonStyles = styled.button<IButtonStyles>`
  position: relative;
  border-radius: ${vars.borderRadius.base};
  cursor: pointer;

  font-size: ${vars.fontSize.base};
  font-weight: 700;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${vars.layouts.inputs.height};
  padding: 0 ${vars.space["4x"]};

  transition: background-color ${buttonAnimationTime}ms ease-in,
    border-color ${buttonAnimationTime}ms ease-in, color ${buttonAnimationTime}ms ease-in;

  &:disabled,
  &.is-loading {
    cursor: not-allowed;
  }

  ${({ buttonStyle }) => {
    if (buttonStyle === ButtonStyle.Default) {
      return css`
        background-color: ${vars.color["blue-1"]};
        border: 0;
        color: ${vars.color["white-1"]};

        &:hover:not(.is-loading, :disabled) {
          background-color: ${vars.color["blue-4"]};
        }
        &:active:not(.is-loading, :disabled) {
          background-color: ${vars.color["blue-1"]};
        }
        &:disabled {
          background-color: ${vars.color["gray-4"]};
        }
      `;
    }
    if (buttonStyle === ButtonStyle.Outline) {
      return css`
        background-color: ${vars.color["white-1"]};
        border: 1px solid ${vars.color["blue-1"]};
        color: ${vars.color["blue-1"]};

        &:hover:not(.is-loading, :disabled) {
          border: 1px solid ${vars.color["blue-4"]};
          color: ${vars.color["blue-4"]};
        }
        &:active:not(.is-loading, :disabled) {
          border: 1px solid ${vars.color["blue-1"]};
          color: ${vars.color["blue-1"]};
        }
        &:disabled {
          border: 1px solid ${vars.color["gray-4"]};
          color: ${vars.color["gray-3"]};
        }
      `;
    }
    if (buttonStyle === ButtonStyle.Link) {
      return css`
        display: inline;
        background-color: transparent;
        border: 0;
        border-radius: 0;
        color: ${vars.color["blue-1"]};
        text-transform: none;
        height: auto;
        padding: 0;

        &:hover,
        &:active {
          text-decoration: underline;
        }
      `;
    }
  }}
`;
