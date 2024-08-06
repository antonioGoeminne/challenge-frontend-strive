import { Avatar } from "../../../ui/Avatar/Avatar";
import LocationIcon from "../../../images/icons/location.svg";

// FIX: WARNING: it should bring the image from a service like cloudinary, in this way of local image is dangerous
import avatar from "../../../images/avatar.png";
import { FollowersStats } from "./FollowersStats";
import { Button } from "../../../ui/Button/Button";

// note: the bg profile could be dynamic

export const ProfileCard = () => {
  return (
    <>
      <div className="w-full absolute top-0 bg-profile h-[200px] bg-center bg-cover bg-no-repeat"></div>
      <div data-testid="profileCard" className="relative top-40">
        <div className=" flex justify-center flex-col items-center">
          <Avatar className="bg-white" src={avatar} alt="profile" />
          <h1 className="text-primary font-bold text-lg my-2">
            Melissa peters
          </h1>
          <p className="text-gray text-sm font-medium">Interior designer</p>
          <span className="flex items-center gap-1 my-1 mr-1">
            <img
              className="w-[27px] h-[27px]"
              src={LocationIcon}
              alt="Lagos, Nigeria"
            />
            <p className="text-gray text-sm font-medium">Lagos, Nigeria</p>
          </span>
          <div className="w-full max-w-[242px]">
            <FollowersStats />
          </div>
          <span className="flex gap-2 my-4">
            <Button className="px-6">Edit profile</Button>
            <Button className="px-6">Add friends</Button>
          </span>
        </div>
      </div>
    </>
  );
};
