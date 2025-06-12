/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { addSkills, getSkills } from "../services/skills/skill";

export const useAddSkills = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_SKILLS"],
    mutationFn: async (skillsData) => await addSkills(skillsData),
    onSuccess: () => {
      toast.success("Skills Added successfully");
    },
    onError: (error: any) => {
      toast.error(error);
    },
  });
};

export const useGetSkills = () => {
  return useQuery({
    queryKey: ["GET_SKILLS"],
    queryFn: async () => getSkills(),
  });
};
