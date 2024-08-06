import { memo } from "react";
import { stats } from "../utils/commons";

export const Component = () => {
  // this info could be from a hook that is connected with a service
  const statsData = {
    followers: 122,
    following: 67,
    likes: "37K",
  };

  return (
    <div data-testid="stats" className="flex justify-between w-full">
      {stats.map((st) => (
        <Stat key={st} label={st} stat={statsData[st]} />
      ))}
    </div>
  );
};

const Stat = ({ label, stat }: { label: string; stat: number | string }) => {
  return (
    <div className="flex flex-col  items-center">
      <p className="font-semibold text-2xl text-primary">{stat}</p>
      <p className="text-sm text-gray font-medium">{label}</p>
    </div>
  );
};

export const FollowersStats = memo(Component);
