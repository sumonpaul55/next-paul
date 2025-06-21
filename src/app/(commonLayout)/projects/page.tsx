import LoadingDoor from "@/src/components/shared/LoadinDoor"
import AllProject from "@/src/Cpages/projects/AllProject"

export const metadata = {
    title: "Projects | Sumon Paul",
    description: "Explore my projects showcasing web development skills in React, Next.js, Node.js, MongoDB, Express.js, and Tailwind CSS. Discover fast, responsive, and SEO-friendly websites with a focus on clean design and great user experience.",
};
const ProjectPage = () => {
    return (
        <div>
            <LoadingDoor />
            <AllProject />
        </div>
    )
}

export default ProjectPage