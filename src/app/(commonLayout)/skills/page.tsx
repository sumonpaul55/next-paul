import Container from "@/src/components/Container"
import LoadingDoor from "@/src/components/shared/LoadinDoor"
import SectionTitle from "@/src/components/shared/SectionTitle"

const page = () => {
    return (
        <>
            <LoadingDoor />
            <Container>
                <div>
                    <SectionTitle title="What I Do" />
                </div>
            </Container>
        </>
    )
}

export default page