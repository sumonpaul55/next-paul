import LoadingDoor from '@/src/components/shared/LoadinDoor'
import About from '@/src/Cpages/home/About'
import EducationSection from '@/src/Cpages/home/Education'
import Script from 'next/script'
import React from 'react'

export const metadata = {
    title: "About Me | Sumon Paul",
    description: "Learn more about Sumon Paul, a web developer from Bangladesh specializing in React, Next.js, and Tailwind CSS. Discover his skills, experience, and passion for web development.",
    keywords: [
        "Sumon Paul",
        "Web Developer",
        "MERN Stack Developer",
        "React Developer",
        "Next.js Developer",
        "Web Development",
        "Frontend Developer",
        "Web Application Developer",
        "Responsive Web Design",
        "JavaScript Developer",
        "Bangladesh Web Developer"
    ],
    authors: [{ name: "Sumon Paul", url: "https://sumonpaul.vercel.app" }],
    creator: "Sumon Paul",
    metadataBase: new URL("https://sumonpaul.vercel.app"),
    openGraph: {
        title: "About Me | Sumon Paul",
        description: "Learn more about Sumon Paul, a web developer from Bangladesh specializing in React, Next.js, and Tailwind CSS. Discover his skills, experience, and passion for web development.",
        url: "https://sumonpaul.vercel.app/about",
        siteName: "Sumon Paul Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sumon Paul - Web Developer"
            }
        ]
    }

}
const AboutPage = () => {

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
            <div>
                <LoadingDoor />
                <div>
                    <About />
                    <EducationSection />
                </div>
            </div>
        </>
    )
}

export default AboutPage