/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { addProject, getProject, updateProject } from "../services/projectService";
import { toast } from "sonner";

export const useAddProjects = () => {
  const router = useRouter();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_PROJECTS"],
    mutationFn: async (postdata) => await addProject(postdata),
    onSuccess: () => {
      toast.success("Post created succefully");
      router.push("/dashboard/projects");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};

export const useGetProject = () => {
  return useQuery<any, Error, FieldValues>({
    queryKey: ["GET_PROJECTS"],
    queryFn: async () => await getProject(),
  });
};

export const useUpdateProject = (id: string, data: FieldValues) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: async () => updateProject(id, data)
  })
}