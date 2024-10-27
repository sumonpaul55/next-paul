import { z } from "zod";

export const postValidation = z.object({
  title: z.string({ required_error: "Need Post title" }).min(10, "title should be minimum 10 character"),
});

export const SkillsValidation = z.object({
  name: z.string({ required_error: "skills name is required" }).min(3, "provide skills name 3 or mor latter"),
  description: z.string({ required_error: "description is required" }).min(100, "provide description minimum 100").max(200, "maximum 200"),
});

export const projectDatavalidation = z.object({
  name: z.string({ required_error: "project name is required" }).min(6, "name minimum 6 character"),
  liveLink: z.string({ required_error: "project name is required" }).min(6, "name minimum 6 character").url(),
  technology: z.string().refine((val) => /^[a-zA-Z]+(,[a-zA-Z]+)*$/.test(val), {
    message: "Please separate multiple technologies with commas, without spaces.",
  }),
});
