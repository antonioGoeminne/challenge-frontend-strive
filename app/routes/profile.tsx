import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PostSection } from "features/posts/components/PostSection";

import { ProfileCard } from "features/profile/components/ProfileCard";
import { getProfile } from "features/profile/services";

export const meta: MetaFunction = () => {
  return [{ title: "Profile" }];
};

export async function loader() {
  const data = await getProfile();

  return {
    user: data,
  };
}

export default function ProfilePage() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="relative">
      <div className="w-full absolute top-0 bg-profile h-[200px] bg-center bg-cover bg-no-repeat"></div>
      <div className="flex flex-col top-40 relative">
        <ProfileCard user={user} />
        <PostSection />
      </div>
    </div>
  );
}
