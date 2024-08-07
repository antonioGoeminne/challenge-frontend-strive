import { User } from "../types";

export const formatName = (user: User) => {
  return user.username;
};

export const formatLocation = (user: User) => {
  return user.address.city;
};
