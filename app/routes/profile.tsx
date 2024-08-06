import type { MetaFunction } from "@remix-run/node";

import { ProfileCard } from "features/profile/components/ProfileCard";

export const meta: MetaFunction = () => {
  return [{ title: "Profile" }];
};

export default function ProfilePage() {
  return (
    <div className="font-sans">
      <ProfileCard />
    </div>
  );
}
