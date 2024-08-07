import {
  ActionFunctionArgs,
  redirect,
  type MetaFunction,
} from "@remix-run/node";
import { HeaderBack } from "features/layout/HeaderBack";
import { Avatar } from "ui/Avatar/Avatar";
import avatar from "../../images/avatar.png";
import { FormEditProfile } from "features/profile/components/FormEditProfile";
import { updateProfile } from "features/profile/services";
import invariant from "tiny-invariant";

export const meta: MetaFunction = () => {
  return [{ title: "Edit Profile" }];
};

export default function ProfilePage() {
  return (
    <div className="h-full fixed z-20 bg-white w-full py-12 flex flex-col items-center px-4 overflow-y-auto">
      <HeaderBack label="Edit profile" />
      <div className="my-4 flex flex-col justify-center items-center w-full">
        <Avatar size={"md"} src={avatar} alt="profile" />
        <FormEditProfile />
      </div>
    </div>
  );
}

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.userId, "Missing userId param");
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);

  await updateProfile(params.userId, updates);
  return redirect(`/profile/photos`);
};
