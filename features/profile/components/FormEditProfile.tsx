import { Form } from "@remix-run/react";
import { Button } from "ui/Button/Button";
import { Select } from "ui/Select/Select";
import { Textfield } from "ui/Textfield/Textfield";

export const FormEditProfile = () => {
  return (
    <Form
      id="contact-form"
      method="post"
      className="flex flex-col gap-3 justify-center items-center w-full my-4"
    >
      <Textfield id="name" label="Name" name="name" />
      <Textfield label="Email" type="email" name="email" />
      <Textfield label="Date of Birth" type="date" name="date" />
      <Select
        name="country"
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
  );
};
