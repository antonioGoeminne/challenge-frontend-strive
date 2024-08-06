import { Tab } from "../../../ui/Tab/Tab";

const options = [
  { triggerLabel: "Photos", value: "photos", children: <>1</> },
  { triggerLabel: "Likes", value: "likes", children: <>2 </> },
];

export const PostSection = () => {
  return <Tab options={options} />;
};
