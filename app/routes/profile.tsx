import type { MetaFunction } from "@remix-run/node";
import { Avatar } from "ui/Avatar/Avatar";

// FIX: WARNING: it should bring the image from a service like cloudinary, in this way of local image is dangerous
import avatar from "../../images/avatar.png";

export const meta: MetaFunction = () => {
  return [{ title: "Profile" }];
};

export default function ProfilePage() {
  return (
    <div className="font-sans p-4">
      <Avatar src={avatar} alt="default avatar" />
    </div>
  );
}
