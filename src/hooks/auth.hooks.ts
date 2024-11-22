/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { contactMe, loginUser, registerUser } from "../services/authService/user";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("Registered successfully");
    },
    onError: (error: any) => {
      toast.error(error);
    },
  });
};
export const useContactForm =()=> {
  return useMutation<any, Error, FieldValues>({
    mutationKey:["CONTACT_FORM"],
    mutationFn: async (formData) => await contactMe({body: formData}),
    onSuccess: ()=> {
      toast.success("Your Message Successfully sent, I will Reach you as soon as possible")
    },
    // onError: (error: any) => {
    //   toast.error(error.message);
    // },
  })
}

export const userLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
  });
};
