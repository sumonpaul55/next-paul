export type Tmenu = {
  name: string;
  url: string;
};

export type TINput = {
  name: string;
  required?: boolean;
  type?: string;
  label: string;
  className?: string;
  size?: "md" | "sm" | "lg";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  disabled?: boolean;
};
export interface TDecodedUser {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  iat: number;
  exp: number;
}

export type TUser = {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TPost = {
  _id: string;
  title: string;
  post: string;
  userId: UserId;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface UserId {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  password: string;
  profilePhoto: string;
  __v: number;
}
