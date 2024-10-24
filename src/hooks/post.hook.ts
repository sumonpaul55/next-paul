/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, getPost, getPostById } from "../services/postService/post";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const createApost = () => {
  const router = useRouter();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postdata) => await createPost(postdata),
    onSuccess: () => {
      toast.success("Post created succefully");
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};

export const useGetpost = () => {
  return useQuery<any, Error, FieldValues>({
    queryKey: ["USEGET_POST"],
    queryFn: async () => await getPost(),
  });
};

export const useGetPostById = () => {
  return useQuery<any, Error, FieldValues>({
    queryKey: ["POST_BY_ID"],
    queryFn: async (id) => await getPostById(id),
  });
};
