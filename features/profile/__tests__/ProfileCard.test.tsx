import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfileCard } from "../components/ProfileCard";

it("should render ProfileCard", () => {
  render(<ProfileCard />);

  const card = screen.getByTestId("profileCard");

  expect(card).toBeInTheDocument();
});
