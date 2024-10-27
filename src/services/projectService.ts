"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import myInstance from "../libs/AxiosInstance";

export const addProject = async (addProject: FieldValues) => {
  try {
    const { data } = await myInstance.post("/project", addProject);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProject = async () => {
  try {
    const { data } = await myInstance.get("/project");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProjectById = async (id: string) => {
  try {
    const { data } = await myInstance.get(`/project/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};