export type Stats = "followers" | "following" | "likes";

export interface User {
  username: string;
  address: {
    city: string;
  };
}

export interface ProfileCardProps {
  user: User;
}
