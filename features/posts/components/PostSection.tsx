import { Outlet, useLocation } from "@remix-run/react";
import { Tab } from "../../../ui/Tab/Tab";

const options = [
  {
    triggerLabel: "Photos",
    value: "photos",
    children: <Outlet />,
    href: "photos",
  },
  {
    triggerLabel: "Likes",
    value: "likes",
    children: <Outlet />,
    href: "likes",
  },
];

export const PostSection = () => {
  const defaultValue = useLocation()?.pathname?.split("/")?.pop() || "";

  return <Tab options={options} defaultValue={defaultValue} />;
};
