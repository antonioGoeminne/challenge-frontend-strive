import type { MetaFunction } from "@remix-run/node";
import { PostSection } from "features/posts/components/PostSection";

import { ProfileCard } from "features/profile/components/ProfileCard";

export const meta: MetaFunction = () => {
  return [{ title: "Profile" }];
};

export default function ProfilePage() {
  return (
    <div className="relative">
      <div className="w-full absolute top-0 bg-profile h-[200px] bg-center bg-cover bg-no-repeat"></div>
      <div className="flex flex-col top-40 relative">
        <ProfileCard />
        <PostSection />
      </div>
    </div>
  );
}
