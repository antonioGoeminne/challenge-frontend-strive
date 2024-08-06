import * as Tabs from "@radix-ui/react-tabs";
import { TabProps, TabTriggerProps } from "./Tab.types";
import { Link } from "@remix-run/react";

export const Tab: React.FC<TabProps> = ({ options, defaultValue }) => {
  return (
    <Tabs.Root
      defaultValue={defaultValue}
      data-testid="tabComponent"
      className="flex flex-col w-full"
    >
      <Tabs.List
        className="shrink-0 flex border-b border-gray-100"
        aria-label="Manage your account"
      >
        {options.map((opt) => (
          <TabTrigger key={opt.value} {...opt} />
        ))}
      </Tabs.List>
      {options.map((opt) => (
        <Tabs.Content
          key={opt.value}
          className="grow p-2 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value={opt.value}
        >
          {opt.children}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

const TabTrigger: React.FC<TabTriggerProps> = ({
  triggerLabel,
  value,
  href,
}) => {
  return (
    <Tabs.Trigger
      data-testid="tabTrigger"
      className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-primary select-none first:rounded-tl-md last:rounded-tr-md hover:text-primary-darker-100 data-[state=active]:font-semibold data-[state=active]:text-primary-darker-100 data-[state=active]:border-b data-[state=active]:border-b-primary data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
      value={value}
    >
      <Link
        className="h-full w-full text-center flex items-center justify-center"
        to={href}
      >
        {triggerLabel}
      </Link>
    </Tabs.Trigger>
  );
};
