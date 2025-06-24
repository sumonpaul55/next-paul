import LoadingDoor from "@/src/components/shared/LoadinDoor"
import AllProject from "@/src/Cpages/projects/AllProject"
import Script from "next/script";

export const metadata = {
    title: "Projects | Sumon Paul",
    description: "Explore my projects showcasing web development skills in React, Next.js, Node.js, MongoDB, Express.js, and Tailwind CSS. Discover fast, responsive, and SEO-friendly websites with a focus on clean design and great user experience.",
};
const ProjectPage = () => {
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
                <AllProject />
            </div>
        </>
    )
}

export default ProjectPage