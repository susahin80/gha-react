import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const el = screen.getByText(/learn react xxx/i);
  expect(el).toBeInTheDocument();
});
