import { z } from "zod";

export const registerValidation = z.object({
  name: z.string({ required_error: "User name is required" }).min(6, "minimum 6 character"),
  email: z.string({ required_error: "User email is required" }).email("Need a valid email address"),
  phone: z.string({ required_error: "Phone is required" }).min(11, "need a valid phone number"),
  address: z.string({ required_error: "Provide an address" }).min(1, "please provide your address"),
  //   role: z.string({ required_error: "role is required" }),
  password: z.string({ required_error: "Password is required" }).min(6, "Atleast 6 password needed"),
  //   profilePhoto: z.string({ required_error: "Profile image is required" }).optional(),
});
