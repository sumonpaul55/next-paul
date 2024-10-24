/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import myInstance from "@/src/libs/AxiosInstance";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await myInstance.post("/auth/register", userData);
    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      // cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await myInstance.post("/auth/login", userData);
    if (data?.data?.accessToken) {
      cookies().set("accessToken", data?.data?.accessToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return {
      _id: decodedToken?._id,
      name: decodedToken?.name,
      email: decodedToken?.email,
      phone: decodedToken?.phone,
      role: decodedToken?.role,
      profilePhoto: decodedToken?.profilePhoto,
    };
  }
  return decodedToken;
};

// logout
export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
