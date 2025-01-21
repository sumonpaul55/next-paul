/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";
import { contactMe, loginUser, registerUser } from "../services/authService/user";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      const data = await registerUser(userData)
      if (data) {
        toast.success(data?.message)
      } else {
        toast.error(data?.error?.message || "something went worng")
      }
    },

  });
};
export const useContactForm = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CONTACT_ME"],
    mutationFn: async (formData) => {
      const res = await contactMe(formData);
      console.log(res)
    },

  })
}

export const userLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      const res = await loginUser(userData)
      console.log(res)
      if (res?.success) {
        toast.success(res?.message)
      }
    },
  });
};
