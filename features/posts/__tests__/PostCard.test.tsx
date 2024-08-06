import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PostCard } from "../components/PostCard";

it("should render PostCard", () => {
  const defaultProps = { id: "1", title: "some-title", image: "some-image" };
  render(<PostCard {...defaultProps} />);

  const card = screen.getByTestId("postCard");

  expect(card).toBeInTheDocument();
});
