import { NavLink } from "@remix-run/react";
import { ChatIcon } from "../../images/icons/ChatIcon";
import { HomeIcon } from "../../images/icons/HomeIcon";
import { ProfileIcon } from "../../images/icons/ProfileIcon";
import { SettingsIcon } from "../../images/icons/SettingsIcon";

const navigationOptions = [
  {
    href: "/",
    icon: (fill: string) => <HomeIcon fill={fill} />,
    alt: "Go home",
  },
  {
    href: "/chat",
    icon: (fill: string) => <ChatIcon fill={fill} />,
    alt: "Go chat page",
  },
  {
    href: "/settings",
    icon: (fill: string) => <SettingsIcon fill={fill} />,
    alt: "Go settings page",
  },
  {
    href: "/profile/photos",
    icon: (fill: string) => <ProfileIcon fill={fill} />,

    alt: "Go user page",
  },
];

export const BottomNavigator = () => {
  return (
    <div
      data-testid="bottomNavigator"
      className="fixed bottom-0 h-[59px] bg-white border-t border-t-gray-100 w-full px-4"
    >
      <ul className="w-full flex justify-between items-center h-full">
        {navigationOptions.map((opt) => (
          <li key={opt.href}>
            <NavLink to={opt.href}>
              {({ isActive }) => (
                <SVGIcon isActive={isActive} pathIcon={opt.icon} />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SVGIcon = ({
  isActive,
  pathIcon,
}: {
  isActive: boolean;
  pathIcon: (fill: string) => JSX.Element;
}) => <>{pathIcon(isActive ? "#242760" : "#C7C6C5")}</>;
