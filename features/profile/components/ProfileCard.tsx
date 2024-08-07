import { Avatar } from "../../../ui/Avatar/Avatar";

// FIX: WARNING: it should bring the image from a service like cloudinary, in this way of local image is dangerous
import avatar from "../../../images/avatar.png";
import { FollowersStats } from "./FollowersStats";
import { Button } from "../../../ui/Button/Button";
import { LocationIcon } from "../../../images/icons/LocationIcon";
import { Link } from "@remix-run/react";
import { ProfileCardProps } from "../types";
import { formatLocation, formatName } from "../domain";

// note: the bg profile could be dynamic

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <>
      <div data-testid="profileCard">
        <div className=" flex justify-center flex-col items-center">
          <Avatar className="bg-white" src={avatar} alt="profile" />
          <h1 className="text-primary font-bold text-lg my-2">
            {formatName(user)}
          </h1>
          <p className="text-gray text-sm font-medium">Interior designer</p>
          <span className="flex items-center gap-1 my-1 mr-1">
            <LocationIcon />
            <p className="text-gray text-sm font-medium">
              {formatLocation(user)}
            </p>
          </span>
          <div className="w-full max-w-[242px]">
            <FollowersStats />
          </div>
          <span className="flex gap-2 my-4">
            <Button asChild className="px-6">
              <Link to={"1/edit"}>Edit profile</Link>
            </Button>
            <Button className="px-6">Add friends</Button>
          </span>
        </div>
      </div>
    </>
  );
};
