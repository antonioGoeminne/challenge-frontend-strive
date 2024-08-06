import type { MetaFunction } from "@remix-run/node";
import { HeaderBack } from "features/layout/HeaderBack";
import { Avatar } from "ui/Avatar/Avatar";
import avatar from "../../images/avatar.png";
import { Form } from "@remix-run/react";
import { Button } from "ui/Button/Button";
import { Textfield } from "ui/Textfield/Textfield";
import { Select } from "ui/Select/Select";

export const meta: MetaFunction = () => {
  return [{ title: "Edit Profile" }];
};

export default function ProfilePage() {
  return (
    <div className="h-full fixed z-20 bg-white w-full py-12 flex flex-col items-center px-4">
      <HeaderBack label="Edit profile" />
      <div className="my-4 flex flex-col justify-center items-center w-full">
        <Avatar size={"md"} src={avatar} alt="profile" />
        <Form className="flex flex-col gap-2 justify-center items-center w-full my-12">
          <Textfield label="Name" />
          <Select
            label="Country/Region"
            options={[
              { label: "Nigeria", value: "NIG" },
              { label: "Argentina", value: "ARG" },
            ]}
          />
          <Button size={"md"} className="my-6 rounded-md" type="submit">
            Save changes
          </Button>
        </Form>
      </div>
    </div>
  );
}
