import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PostSection } from "../components/PostSection";

it("should render TabComponent inside post Section", () => {
  render(<PostSection />);

  const tab = screen.getByTestId("tabComponent");

  expect(tab).toBeInTheDocument();
});
