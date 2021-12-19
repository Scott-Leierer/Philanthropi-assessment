import styled from "styled-components/macro";
import { vars } from "styles/vars.css";

import { IInputStyles, inputAnimationTime } from "./types";

export const InputStyles = styled.div<IInputStyles>`
  position: relative;
  padding-bottom: 2rem;
  width: 100%;
  font-size: 1rem;
  &.error {
    .input {
      background-color: ${vars.color["red-4"]};
      color: ${vars.color["red-2"]};
      border-color: ${vars.color["red-2"]};
    }
    .placeholder {
      color: ${vars.color["red-2"]};
    }
    select {
      background-color: ${vars.color["red-4"]};
      color: ${vars.color["red-2"]};
      border-color: ${vars.color["red-2"]};
    }
  }
  .input,
  .placeholder,
  select {
    padding: 1rem 1.5rem 0 1rem;
  }
  .placeholder {
    position: absolute;
    left: 0;
    color: grey;
    text-align: left;
    cursor: text;
    font-size: 1rem;
    user-select: none;
    pointer-events: none;
  }
  .input,
  select {
    width: 100%;
    padding-top: 1.5rem;
    border-radius: 5px;
  }
  .input:focus + .placeholder,
  .input:not(:placeholder-shown) + .placeholder {
    transform: translateY(-25%) translateX(-10%) scale(0.75);
  }
  .dropdown {
    .placeholder:not(.big-text) {
      transform: translateY(-25%) translateX(-10%) scale(0.75);
    }
  }
  .placeholder {
    transition: transform ${inputAnimationTime}ms;
  }
  .error {
    font-size: 1rem;
    color: ${vars.color["red-2"]};
    display: block;
    text-align: left;
    margin-top: 5px;
    font-weight: 700;
    visibility: hidden;
  }
  .show-error {
    visibility: visible;
  }
`;
