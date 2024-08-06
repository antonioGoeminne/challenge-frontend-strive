import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Profile likes" }];
};

export default function ProfilePhotos() {
  return <div className="relative">likes</div>;
}
