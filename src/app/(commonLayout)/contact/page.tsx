/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/src/components/Container";
import { useContact } from "@/src/hooks/auth.hooks";
import { Input, Textarea } from "@nextui-org/react";
import Script from "next/script";
import { FieldValues, useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const { mutate } = useContact();
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
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-1837Y90YZZ"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1837Y90YZZ');
            `,
        }}
      />
      <Container classname="bg-slate-700 min-h-screen md:pt-24">
        <div className="flex flex-col md:flex-row justify-center my-10 sm:p-6 text-white gap-8">
          {/* Contact Info & Socials (Left Side) */}
          <div className="p-3 sm:p-6 rounded-lg shadow-lg w-full md:w-1/2 bg-slate-800">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FaPhone className="text-lg mt-1 text-white" />
                <div>
                  <p className="font-medium text-white">Phone:</p>
                  <a
                    href="tel:+8801628883217"
                    className="text-blue-300 hover:underline"
                  >
                    +8801628883217
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-2xl mt-1 text-white" />
                <div className="mt-4">
                  <p className="font-medium text-white">WhatsApp:</p>
                  <a
                    href="https://wa.me/8801628883217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-lg mt-1 text-white" />
                <div>
                  <p className="font-medium text-white">Email:</p>
                  <a
                    href="mailto:sumonpaul.web@gmail.com"
                    className="text-blue-300 hover:underline"
                  >
                    sumonpaul.web@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-lg mt-1 text-white" />
                <div>
                  <p className="font-medium text-white">Address:</p>
                  <p>Mymensingh, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-white font-medium mb-3">Follow me:</p>
              <div className="flex gap-4 text-xl text-white">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaGithub />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaFacebook />
                </a>
                <a href="https://wa.me/8801XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 p-3 sm:p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>

            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                radius="sm"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full"
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message as string}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <Input
                  id="email"
                  radius="sm"
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 block w-full"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message as string}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                <Input
                  id="phone"
                  type="number"
                  radius="sm"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: "Phone number is required" })}
                  className="mt-1 block w-full"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message as string}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <Textarea
                id="message"
                radius="sm"
                placeholder="Enter your message"
                {...register("message", { required: "Message is required" })}
                className="mt-1 block w-full"
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message as string}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-medium rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
