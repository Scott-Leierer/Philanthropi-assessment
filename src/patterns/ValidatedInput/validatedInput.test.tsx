import { render, screen } from "@testing-library/react";
import { ValidatedInput } from "./index";
import { InputType } from "./types";

test("renders validated input component", () => {
  render(
    <ValidatedInput
      name="test"
      placeholder="Search Text"
      register={() => {
        /* no-op */
      }}
      errors={{}}
    />
  );
  const linkElement = screen.getByText(/search text/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders validated input component as state dropdown", () => {
  render(
    <ValidatedInput
      name="test"
      type={InputType.State}
      placeholder="State"
      register={() => {
        /* no-op */
      }}
      errors={{}}
    />
  );
  const linkElement = screen.getByText(/florida/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders validated input component and error", () => {
  render(
    <ValidatedInput
      name="test"
      placeholder="Error Test"
      register={() => {
        /* no-op */
      }}
      errors={{
        message: "This is an error",
      }}
    />
  );
  const linkElement = screen.getByText(/this is an error/i);
  expect(linkElement).toBeInTheDocument();
});
