export type Stats = "followers" | "following" | "likes";

export interface User {
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export interface ProfileCardProps {
  user: User;
}

export interface FormEditProps {
  user: User;
}
