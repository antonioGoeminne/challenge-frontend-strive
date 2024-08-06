import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "ui/Button/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold text-center">
          Challenge frontend strive
        </h1>
        <Button className="w-[124px]">
          <Link to={"/profile/photos"}>Go to profile</Link>
        </Button>
      </div>
    </div>
  );
}
