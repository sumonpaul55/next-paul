import LoadingDoor from "@/src/components/shared/LoadinDoor"
import AllProject from "@/src/Cpages/projects/AllProject"
import Link from "next/link"

const ProjectsPage = () => {
    return (
        <>
            <LoadingDoor />


            <div className='bg-gray-100 px-3 py-2'>
                <div className='py-4 flex justify-between'>
                    <h2 className='font-semibold text-lg md:text-xl'>Projects</h2>
                    <Link href={`/dashboard/projects/add-projects`} className='py-1 px-3 text-white rounded-lg bg-primary'>Add Projects</Link>
                </div>
                <div className='bg-white'>
                    <h1 className='p-2 text-lg md:text-xl font-semibold'>All Projects</h1>
                    <AllProject />
                </div>
            </div>
        </>
    )
}

export default ProjectsPage