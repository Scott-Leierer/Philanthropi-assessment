import { FC } from "react";

import { GlobalStyles } from "./global.css";
import { RootLayoutStyles } from "./rootLayout.css";

export const RootLayout: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <RootLayoutStyles>{children}</RootLayoutStyles>
    </>
  );
};
