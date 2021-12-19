import { css } from "styled-components/macro";

// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const SetFlexLayout = (
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start"
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;
