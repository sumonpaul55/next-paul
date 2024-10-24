/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import myInstance from "@/src/libs/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const createPost = async (postData: FieldValues) => {
  try {
    const { data } = await myInstance.post("/post", postData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPost = async () => {
  try {
    const { data } = await myInstance.get("/post");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPostById = async (id: any) => {
  try {
    const { data } = await myInstance.get(`/post/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
