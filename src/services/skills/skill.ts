/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import myInstance from "@/src/libs/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addSkills = async (skillsData: FieldValues) => {
  try {
    const { data } = await myInstance.post("/skills", skillsData);
    return data;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error);
  }
};

export const getSkills = async () => {
  try {
    const { data } = await myInstance.get("/skills");
    return data;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error);
  }
};
