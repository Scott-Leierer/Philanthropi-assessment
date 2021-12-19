import { createGlobalStyle } from "styled-components/macro";
import { normalize } from "styled-normalize";
import { vars } from "styles/vars.css";

export const GlobalStyles = createGlobalStyle`
    body, body * {
        box-sizing: border-box;
        font-family: ${vars.fontFamily.body};
    }
    body {
        background-color: ${vars.color["white-1"]};
        color: ${vars.color["black-2"]};
    }

    :root {
        // set any CSS variables here
        // e.g.  --customer-primary-color: red;
    }

    ${normalize}
`;
