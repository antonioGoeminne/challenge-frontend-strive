import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FollowersStats } from "../components/FollowersStats";

it("should render FollowersStats", () => {
  render(<FollowersStats />);

  const stats = screen.getByTestId("stats");

  expect(stats).toBeInTheDocument();
});
