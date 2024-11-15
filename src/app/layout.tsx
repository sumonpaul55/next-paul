import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, Roboto_Slab } from 'next/font/google'

import "./globals.css";
import MainLayout from "@/src/components/layouts/MainLayout";
import Provider from "@/src/libs/providers/Provider";

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
  title: "Portfolio || Sumon Paul",
  description: "Passionate web developer with a focus on creating dynamic and visually appealing websites that drive user engagement.",
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
        <footer className="bg-black text-white row-start-3 flex gap-6 flex-wrap items-center justify-center h-12">
          <h4 className="text-center w-full whitespace-normal">&copy; {new Date().getFullYear()} allright reserved by Sumon Chandra paul </h4>
        </footer>
      </body>
    </html>
  );
}
