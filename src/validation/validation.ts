import { z } from "zod";

export const postValidation = z.object({
  title: z.string({ required_error: "Need Post title" }).min(10, "title should be minimum 10 character"),
});
