import { useNavigate } from "@remix-run/react";
import { ArrowBackIcon } from "images/icons/ArrowBackIcon";
import { Button } from "ui/Button/Button";

export const HeaderBack = ({ label }: { label: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between w-full">
      <Button
        className="bg-transparent hover:bg-transparent active:border-none focus:border-none"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon />
      </Button>
      <p className="flex-1 text-center text-xl font-bold mr-[50px]">{label}</p>
    </div>
  );
};
