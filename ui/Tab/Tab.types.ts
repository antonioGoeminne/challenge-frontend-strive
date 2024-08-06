export interface TabTriggerProps {
  triggerLabel: string;
  value: string;
  href: string;
  children: React.ReactNode;
}

interface OptionTab extends TabTriggerProps {}

export interface TabProps {
  options: OptionTab[];
  defaultValue?: string;
}
