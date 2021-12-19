import { render as reactDomRender } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { RootLayout } from "features/Layouts";
import { MainRouteSwitch } from "routes";

import reportWebVitals from "./reportWebVitals";

reactDomRender(
  <BrowserRouter>
    <RootLayout>
      <MainRouteSwitch />
    </RootLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
