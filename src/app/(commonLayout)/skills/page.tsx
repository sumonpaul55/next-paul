import Container from "@/src/components/Container"
import LoadingDoor from "@/src/components/shared/LoadinDoor"

import SectionTitle from "@/src/components/shared/SectionTitle"
import SkillsCard from "@/src/components/shared/SkillsCard"
import Script from "next/script";
// import { getSkills } from "@/src/services/skills/skill"



export const metadata = {
    title: "Skills | Sumon Paul",
    description: "Explore my skills in web development, including React, Next.js, Node.js, MongoDB, Express.js, and Tailwind CSS. I specialize in building fast, responsive, and SEO-friendly websites with a focus on clean design and great user experience.",
};

const SkillsPage = async () => {
    // const { data } = await getSkills();

    const res = await fetch("https://portfolio-server-beige-beta.vercel.app/api/skills", {
        cache: "no-store"
    });

    const data = await res?.json()
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
            <LoadingDoor />
            <Container classname="pb-10 mt-20">
                <div>
                    <SectionTitle title="What I Do" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            data?.data?.map((item: { _id: string; name: string; description: string; image: string }) => (
                                <SkillsCard key={item._id} name={item?.name} description={item?.description} image={item?.image} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SkillsPage