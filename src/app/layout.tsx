import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, Roboto_Slab } from 'next/font/google'

import "./globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";
import Provider from "@/src/libs/providers/Provider";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--geist-mono",
  weight: "100 900",
});

const roboto_slab = Roboto_Slab({
  weight: '400',
  subsets: ['latin'],
  variable: "--roboto_slab"
})
const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: "--open_sans"
})
export const metadata: Metadata = {
  title: "Sumon Paul | Web Developer – React, Next.js, node.js, MongoDB, Express.js, Tailwind CSS",
  description: "Sumon Paul is a web developer from Bangladesh specializing in React, Next.js, and Tailwind CSS. He builds fast, responsive, and SEO-friendly websites focused on clean design and great user experience.",
  keywords: [
    "Sumon Chandra Paul",
    "Web Developer Bangladesh",
    "Web Developer Mymensingh",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Application Developer",
    "Mern stack Developer",
    "Web Application Developer",
    "Responsive Web Design",
    "Responsive Web Development",
    "SEO Friendly Websites",
  ],
  authors: [{ name: "Sumon Cahndra Paul", url: "https://sumonpaul.vercel.app" }],
  creator: "Sumon Paul",
  metadataBase: new URL("https://sumonpaul.vercel.app"),
  openGraph: {
    title: "Sumon Paul | Web Developer",
    description: "Web developer and MERN stack specialist focused on SEO, performance, design, and UI/UX—using React.js, Next.js, Tailwind, Node.js, MongoDB, and Express.js.",
    url: "https://sumonpaul.vercel.app",
    siteName: "Sumon Paul Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sumonpaul.vercel.app/og-image.png", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Sumon Paul Portfolio Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumon Paul | Web Developer – React, Next.js, Tailwind",
    description: "Sumon Paul is a MERN stack developer from Bangladesh, specializing in React and Next.js. He builds fast, responsive, and SEO-friendly websites with modern design, smooth UX, and scalable backend solutions using Node.js, Express, and MongoDB.",
    creator: "@yourTwitterHandle", // Optional: replace if you have one
    images: ["https://sumonpaul.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto_slab.variable} ${open_sans.variable} antialiased`}>
        <Provider>
          <MainLayout>
            {children}
          </MainLayout>
        </Provider>
        {/* Footer */}
        <footer className="bg-black text-white row-start-3 flex gap-6 flex-wrap items-center justify-center py-1">
          <div className="flex items-center gap-2 justify-between flex-col md:flex-row container mx-auto px-4 py-2">
            {/* all social media link */}
            <div className="flex items-center gap-5 text-xl">
              <Link href="https://www.linkedin.com/in/sumonpaul5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 border size-8 rounded-full flex justify-center items-center hover:text-white transition-colors">
                <FaLinkedin />
              </Link>
              <Link href="https://www.github.com/sumonpaul55" target="_blank" rel="noopener noreferrer" className="text-gray-400 border size-8 rounded-full flex justify-center items-center hover:text-white transition-colors">
                <BsGithub />
              </Link>

              <Link href="https://www.facebook.com/sumonpaulit" target="_blank" rel="noopener noreferrer" className="text-gray-400 border size-8 rounded-full flex justify-center items-center hover:text-white transition-colors">
                <FaFacebookF />
              </Link>
              <Link href="https://www.instagram.com/sumpaul5" target="_blank" rel="noopener noreferrer" className="text-gray-400 border size-8 rounded-full flex justify-center items-center hover:text-white transition-colors">
                <FaInstagram />
              </Link>
            </div>

            <h4 className="w-full text-center md:text-end whitespace-normal">&copy; {new Date().getFullYear()} allright reserved by Sumon Chandra paul </h4>
          </div>
        </footer>
      </body>
    </html>
  );
}
