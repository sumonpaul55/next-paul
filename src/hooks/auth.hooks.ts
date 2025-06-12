/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";
import { contactMe, getMessage, loginUser, registerUser } from "../services/authService/user";
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
export const useContact = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CONTACT_ME"],
    mutationFn: async (userData) => {
      const res = await contactMe(userData)
      if (res?.success) {
        toast.success(res?.message)
      }
    },
  });
};

export const getClientMessage = () => {
  return useQuery({
    queryKey: ["GET_MESSAGE"],
    queryFn: async () => {
      const res = await getMessage()
      return res?.data
    }
  })
}




export const userLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      const res = await loginUser(userData)
      if (res?.success) {
        toast.success(res?.message)

      }
    },
  });
};
