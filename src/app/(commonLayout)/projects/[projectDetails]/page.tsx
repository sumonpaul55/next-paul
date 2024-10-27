import ProjectDetails from '@/src/Cpages/ProjectDetails';
import { getProjectById } from '@/src/services/projectService';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

const PDetails = async ({ params }: Params) => {
    const { projectDetails } = params;
    const { data } = await getProjectById(projectDetails)
    // console.log(data)
    return (
        <div>
            <ProjectDetails project={data} />
        </div>
    )
}

export default PDetails