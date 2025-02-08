import Container from "@/src/components/Container"
import LoadingDoor from "@/src/components/shared/LoadinDoor"

import SectionTitle from "@/src/components/shared/SectionTitle"
import SkillsCard from "@/src/components/shared/SkillsCard"
// import { getSkills } from "@/src/services/skills/skill"

const SkillsPage = async () => {
    // const { data } = await getSkills();

    const res = await fetch("https://portfolio-server-beige-beta.vercel.app/api/skills", {
        cache: "no-store"
    });

    const data = await res?.json()

    return (
        <>
            <LoadingDoor />
            <Container classname="pb-10 bg-primary">
                <div>
                    <SectionTitle title="What I Do" />
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4'>
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