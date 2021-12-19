import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

test("renders Home form", () => {
  render(<Home />);
  const linkElement = screen.getByText(/please provide your address/i);
  expect(linkElement).toBeInTheDocument();
});
