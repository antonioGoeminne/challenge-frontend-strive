import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfileCard } from "../components/ProfileCard";

jest.mock("@remix-run/react", () => ({
  Link: (props: { children: React.ReactNode }) => <>{props.children}</>,
}));

it("should render ProfileCard", () => {
  render(
    <ProfileCard
      user={{ username: "", address: { city: "some" }, email: "some-email" }}
    />
  );

  const card = screen.getByTestId("profileCard");

  expect(card).toBeInTheDocument();
});
