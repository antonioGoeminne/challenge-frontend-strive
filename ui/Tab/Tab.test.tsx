import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tab } from "./Tab";

it("should render TabComponent", () => {
  render(<Tab options={[]} />);

  const tab = screen.getByTestId("tabComponent");

  expect(tab).toBeInTheDocument();
});

it("triggers should have same length that options", () => {
  render(
    <Tab
      options={[
        { triggerLabel: "some", value: "some", children: <></> },
        { triggerLabel: "some2", value: "some2", children: <></> },
      ]}
    />
  );

  const tab = screen.getAllByTestId("tabTrigger");

  expect(tab).toHaveLength(2);
});
