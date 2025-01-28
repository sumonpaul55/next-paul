/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContact } from "@/src/hooks/auth.hooks";
import { Input, Textarea } from "@nextui-org/react";
// pages/contact.js
import { FieldValues, useForm } from "react-hook-form";

const Contact = () => {
  const { mutate } = useContact()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    mutate(data);
    reset();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary p-4 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enater your name"
            radius="sm"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary" />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message as string}</p>}
        </div>

        {/* Email Field or phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {/* email fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <Input
              id="email"
              radius="sm"
              type="email"
              placeholder="Enater your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary" />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message as string}</p>}
          </div>
          {/* phone fields */}
          <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-300">
              Phone
            </label>
            <Input
              type="number"
              radius="sm"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your phone number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message as string}</p>}
          </div>
        </div>
        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <Textarea
            id="message"
            radius="sm"
            placeholder="Enater your Message"
            {...register("message", { required: "Message is required" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
          />
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message as string}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white font-medium rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
