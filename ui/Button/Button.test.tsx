import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // So we can use toBeInTheDocument assertion
import { Button } from "./Button";

it("should show welcome message", () => {
  const defaultProps = { children: "texto" };
  render(<Button {...defaultProps} />);

  expect(screen.getByTestId("buttonComponent")).toBeInTheDocument();
});

it("should fire event  when onClick", () => {
  const defaultProps = { children: "texto", onClick: jest.fn() };
  render(<Button {...defaultProps} />);

  const btn = screen.getByTestId("buttonComponent");

  fireEvent.click(btn);

  expect(defaultProps.onClick).toHaveBeenCalled();
});
