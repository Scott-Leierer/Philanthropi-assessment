import styled from "styled-components/macro";
import { vars } from "styles/vars.css";

export const HomeStyles = styled.div`
  background-color: ${vars.color["gray-1"]};
  color: ${vars.color["black-1"]};
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }

  .button {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;
