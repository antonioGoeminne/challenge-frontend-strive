import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Avatar } from "./Avatar";

it("should render avatar", () => {
  const defaultProps = { src: "some-src", alt: "some-alt" };
  render(<Avatar {...defaultProps} />);

  const avt = screen.getByTestId("avatar");

  expect(avt).toBeInTheDocument();
});
