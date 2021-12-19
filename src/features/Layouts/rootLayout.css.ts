import { ReactNode } from "react";
import styled from "styled-components/macro";

export interface IRootLayoutStyles {
  children: ReactNode;
}

export const RootLayoutStyles = styled.div<IRootLayoutStyles>`
  display: grid;
  // grid-template-areas: ;
  width: 100%;
  min-height: 100vh;
`;
